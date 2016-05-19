import { START } from "./states"
import { START_GAME } from "../main/actions"

export default (state = {}, action) => {
  if (!action) { return state }

  switch (action.type){
    case START_GAME:
      return {
        display: START,
        board: action.data,
      }
    default:
      return state
  }
}
