import { connect } from "react-redux";
import { 
	generateContenders,
	updateBattle,
	updateWinner,
	resetBattle,
} from "../data/actions";

import BattleField from "../components/BattleField";

const mapStateToProps = state => ({
	kittens: state.getIn([ "kittens", "players" ]),
	puppies: state.getIn([ "puppies", "players" ]),
	kitten: state.get("kitten"),
	puppy: state.get("puppy"),
	battled: state.get("battled"),
	winner: state.get("winner"),	
});

const mapDispatchToProps = dispatch => ({
	getContender: () => dispatch(generateContenders()),
	updateBattle: () => dispatch(updateBattle()),
	updateWinner: () => dispatch(updateWinner()),
	resetBattle: () => dispatch(resetBattle()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BattleField);