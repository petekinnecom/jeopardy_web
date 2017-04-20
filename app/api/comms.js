import 'whatwg-fetch'

const AVAILABLE_GAMES = 3640
const RESERVE_SIZE = 30

const randomShowId = (completedGames, reserves) => {

  let reservesIds = reserves.map((r) => { return r.id })
  let availableGames = []
  for (let i = 1; i < AVAILABLE_GAMES; i = i + 1) {
    if (completedGames.indexOf(i) < 0 && reserves.indexOf(i) < 0) {
      availableGames.push(i)
    }
  }
  const randomEntry = Math.floor(Math.random() * availableGames.length)
  return availableGames[randomEntry]
}


export const refillReserves = (completedGames, reserves) => {
  if (reserves.length > 0) {
    return Promise.resolve(reserves)
  } else {
    let promises = []
    for (var i=0; i < RESERVE_SIZE; i++) {
      const showId = randomShowId(completedGames, reserves)
      promises.push(fetch(`shows/${showId}`).then((r) => { return r.json()}))
    }
    return Promise.all(promises)
  }
}
