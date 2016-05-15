export default (state, action) => {
  if (action.type === "START_GAME") {
    return {...state, gameState: "LOADING"}
  }
}
