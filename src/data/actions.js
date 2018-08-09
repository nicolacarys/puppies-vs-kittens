export const GENERATE_CONTENDERS = Symbol("GENERATE_CONTENDERS");

export const generateContenders = (value) => ({
  type: GENERATE_CONTENDERS,
  value,
});

export const UPDATE_BATTLE = Symbol("UPDATE_BATTLE");

export const updateBattle = (value) => ({
  type: UPDATE_BATTLE,
  value,
});

export const UPDATE_WINNER = Symbol("UPDATE_WINNER");

export const updateWinner = (value) => ({
  type: UPDATE_WINNER,
  value,
});

export const RESET_BATTLE = Symbol("RESET_BATTLE");

export const resetBattle = (value) => ({
  type: RESET_BATTLE,
  value,
});

export const RESET_COUNTER = Symbol("RESET_COUNTER");

export const resetCounter = (value) => ({
  type: RESET_COUNTER,
  value,
});