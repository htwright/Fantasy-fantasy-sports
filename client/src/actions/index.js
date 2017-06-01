// import { PW } from '../../config';
// require('dotenv').config();

const RECIEVE_PLAYERS = 'RECIEVE_PLAYERS';
const recievePlayers = (data) => ({
  type: RECIEVE_PLAYERS,
  data
})

const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
const requestPlayers = () => ({
  type: REQUEST_PLAYERS
})
//USED for validation
const username = 'baamosk';
const password = 'Jajuka888';
const auth = btoa(username + ':' + password);
const Authorization = {headers: { Authorization: `Basic ${auth}` }};

const players = 'stephen-curry';
const team = '';

export const fetchPlayers = (search) => {
  console.log(search);
  //This gets the roster for GSW game 4 on 5/22
  //const URL = 'https://www.mysportsfeeds.com/api/feed/pull/nba/2017-playoff/roster_players.json?fordate=20170522&team=gsw&player';
  const URL = `https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/cumulative_player_stats.json?playerstats=2PA,2PM,3PA,3PM,FTA,FTM,PTS/G,AST/G,STL/G,REB/G,TOV/G&player=${search}`;
  return dispatch => {
    dispatch(requestPlayers());
    //second arg in fetch can be opts
    fetch(URL, Authorization)
    .then(response => response.json())
    .then(res => dispatch(recievePlayers(res.cumulativeplayerstats.playerstatsentry)))
    .catch(err => console.log(err))
  }
}

// const opts = {
//   headers: {
//     authorization: `Bearer ${YelpToken}`
//   }
// }