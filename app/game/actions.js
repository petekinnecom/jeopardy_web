export const NEXT = "NEXT"
export const PREVIOUS = "PREVIOUS"
export const FINISH = "FINISH"

export const next = () => {
  return {
    type: NEXT
  }
}

export const previous = () => {
  return {
    type: PREVIOUS
  }
}

export const finish = () => {
  return {
    type: FINISH
  }
}
