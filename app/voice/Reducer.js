import { TOGGLE } from "./actions"

const initialState = {
  enabled: true
}

export default (state, action) => {
  if (!state) {
    return initialState
  }

  switch(action.type) {
    case TOGGLE:
      return {
        enabled: !state.enabled
      }
  }
  return state
}
