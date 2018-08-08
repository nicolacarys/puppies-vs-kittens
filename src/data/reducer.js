import initial from "./initial";

import {
	GENERATE_CONTENDERS,
	UPDATE_BATTLE,
	UPDATE_WINNER,
	RESET_BATTLE
} from "./actions";

const generateContenders = (state) => {
	let kitten = Math.floor(Math.random() * state.getIn([ "kittens", "players" ]).count());
	let puppy = Math.floor(Math.random() * state.getIn([ "puppies", "players" ]).count());

	return state.set("kitten", kitten).set("puppy", puppy);
};

const updateBattle = (state) => (
	state.get("battled") ? state.set("battled", false) : state.set("battled", true)
);

const updateWinner = (state) => {
	let number = Math.floor(Math.random() * 100);

	if (number <= 25) {
		return state.set("winner", "kitten").update("kittenVic", victory => victory + 1);
	
	} else if (number > 25 && number <= 50) {
		return state.set("winner", "puppy").update("puppyVic", victory => victory + 1);
	
	} else if (number > 50 && number <= 75) {
		return state.set("winner", "death");
	
	} else {
		return state.set("winner", "friendship");
	
	}
};

const resetBattle = (state) => (
	state.set("battled", false).set("winner", "").set("kitten", 0).set("puppy", 0)
);

export default (state = initial, action) => {
  switch (action.type) {
		case GENERATE_CONTENDERS: return generateContenders(state, action);
		case UPDATE_BATTLE: return updateBattle(state, action);
		case UPDATE_WINNER: return updateWinner(state, action);
		case RESET_BATTLE: return resetBattle(state, action);
    default: return state;
  }
};