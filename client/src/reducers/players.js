const initialState = {
  data: [],
  loading: false,
  team:[]
}

const players = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_PLAYERS':
      return {
        ...state,
        loading: true
      }
    case 'RECIEVE_PLAYERS':
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case 'ADD_PLAYER_TO_TEAM':
      return{
        ...state,
        team:[...state.team, action.data]
      }
    case 'DB_POST_START':
      return{
        ...state,
        loading:true
      }
    case 'DB_POST_SUCCESSFUL':
      return{
        ...state,
        loading:false,
        team:[]
      }
    case 'DB_POST_ERROR':
      return{
        ...state,
        loading:false
      }
    default:
      return state;
  }
}

export default players