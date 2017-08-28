const RECIEVE_TEAMS = `RECIEVE_TEAMS`;
const recieveTeams = (data) => ({
  type: RECIEVE_TEAMS,
  data
});

/*
  TODO: Why are you using back quotes ``. It doesn't make sense
        to use them unless you inser variables in the string.
*/

const REQUEST_TEAMS = `REQUEST_TEAMS`;
const requestTeams = () => ({
  type: REQUEST_TEAMS
});

const RECIEVE_PLAYERS = `RECIEVE_PLAYERS`;
const recievePlayers = (data) => ({
  type: RECIEVE_PLAYERS,
  data
});

const REQUEST_PLAYERS = `REQUEST_PLAYERS`;
const requestPlayers = () => ({
  type: REQUEST_PLAYERS
});

export const ADD_PLAYER_TO_TEAM = `ADD_PLAYER_TO_TEAM`;
export const addPlayerToTeam = (data) => ({
  type: ADD_PLAYER_TO_TEAM,
  data
});

export const DB_POST_START = `DB_POST_START`;
export const dbPostStart = () => ({
  type: DB_POST_START
});

export const DB_POST_SUCCESSFUL = `DB_POST_SUCCESSFUL`;
export const dbPostSuccessful = () => ({
  type: DB_POST_SUCCESSFUL
});

export const DB_POST_ERROR = `DB_POST_ERROR`;
export const dbPostError = (error) => ({
  type: DB_POST_ERROR,
  error
});

export const DB_GET_START = `DB_GET_START`;
export const dbGetStart = () => ({
  type: DB_GET_START
});

export const DB_GET_SUCCESSFUL = `DB_GET_SUCCESSFUL`;
export const dbGetSuccessful = (data) => ({
  type: DB_GET_SUCCESSFUL,
  data
});

export const DB_GET_ERROR = `DB_GET_ERROR`;
export const dbGetError = (error) => ({
  type: DB_GET_ERROR,
  error
});

export const TEAM_DATA_PUSH = `TEAM_DATA_PUSH`;
export const teamDataPush = (data) => ({
  type:TEAM_DATA_PUSH,
  data
});


/*
  TODO: Use a different file to insert users, passwords, API keys, etc...
        Then you can add that file in the gitignore and your credentials
        will be safe.
*/

//USED for validation
const username = `baamosk`;
const password = `Jajuka888`;
const auth = btoa(username + `:` + password);
const Authorization = {headers: { Authorization: `Basic ${auth}` }};

// const players = 'stephen-curry';
// const team = '';

export const fetchPlayers = (search) => {
  //This gets the roster for GSW game 4 on 5/22
  //const URL = 'https://www.mysportsfeeds.com/api/feed/pull/nba/2017-playoff/roster_players.json?fordate=20170522&team=gsw&player';
  const URL = `https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/cumulative_player_stats.json?playerstats=2PA,2PM,3PA,3PM,FTA,FTM,PTS/G,AST/G,STL/G,REB/G,TOV/G&player=${search}`;
  return dispatch => {
    dispatch(requestPlayers());
    //second arg in fetch can be opts
    fetch(URL, Authorization)
    .then(response => response.json())
    .then(res => dispatch(recievePlayers(res.cumulativeplayerstats.playerstatsentry)))
    .catch(err => console.log(err));
  };
};

// export const fetchPlayer = (search) => {
//   const URL = `https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/cumulative_player_stats.json?playerstats=2PA,2PM,3PA,3PM,FTA,FTM,PTS/G,AST/G,STL/G,REB/G,TOV/G&player=${search}`;
//   fetch(URL, Authorization)
//   .then(res => res.json())
//   .catch(err => console.error(err));
// };

//Promise.all([fetchPlayer([0]),...])
export const fetchTeams = () => {
  const url = `/api/teams`;
  return dispatch =>{
    dispatch(requestTeams());
    fetch(url)
      .then(res => res.json())
      .then(res => dispatch(recieveTeams(res)))
      .catch(err => console.error(err));
  };
};
/*
  TODO: Do not leave commented code. If you don't need this remove it.
*/

export const pushTeamToDb = (teamObj) => {
  const url = `/api/teams`;
  // console.log(team);
  const headers = {
    'Content-Type': `application/json`
  };
  // const teamObj = {
  //   owner:'harrison',
  //   players: {
  //     guard1:team[0],
  //     guard2:team[1],
  //     forward1:team[2],
  //     forward2:team[3],
  //     center:team[4]
  //   }
  // };
  const options = {
    method: `POST`,
    body: JSON.stringify(teamObj),
    headers:headers
  };
  return dispatch => {
    dispatch(dbPostStart());
    fetch(url, options)
    .then(res => res.json())
    .then(res => {console.log(res);dispatch(dbPostSuccessful());})
    .catch(err => console.error(err));
  };
};

export const fetchOwnerTeam = (owner) => {
  const url = `/api/owners/${owner}`;
  return dispatch => {
    dispatch(dbGetStart());

    fetch(url)
    .then(res => res.json())
    .then(res => {console.log(res);dispatch(dbGetSuccessful(res));})
    .catch(err => console.error(err));
  };
};

// const opts = {
//   headers: {
//     authorization: `Bearer ${YelpToken}`
//   }
// }
