const RECIEVE_PLAYERS = 'RECIEVE_PLAYERS';
const recievePlayers = (data) => ({
  type: RECIEVE_PLAYERS,
  data
})

const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
const requestPlayers = () => ({
  type: REQUEST_PLAYERS
})

export const fetchPlayers = () => {
  //This gets the roster for GSW game 4 on 5/22
  const URL = 'https://www.mysportsfeeds.com/api/feed/pull/nba/2017-playoff/roster_players.json?fordate=20170522&team=gsw';
  return dispatch => {
    dispatch(recievePlayers())

    fetch(URL)
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
}