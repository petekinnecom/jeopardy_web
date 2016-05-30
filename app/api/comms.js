const AVAILABLE_GAMES = 3640

export const fetchRandomGame = (completedGames) => {
  let availableGames = []
  for (let i = 1; i < AVAILABLE_GAMES; i = i + 1) {
    if (completedGames.indexOf(i) < 0) {
      availableGames.push(i)
    }
  }

  const randomEntry = Math.floor(Math.random() * availableGames.length)
  let showId = availableGames[randomEntry]

  return fetch(`/shows/${showId}`)
    .then((response) => {
      return response.json()
    })
}
