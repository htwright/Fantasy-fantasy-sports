const initialState = {
  data: [],
  loading: false,
  teamData:[]
}

const owner = (state = initialState, action) => {
  switch(action.type) {
    case 'DB_GET_START':
      return{
        ...state,
        loading:true
      }
    case 'DB_GET_SUCCESSFUL':
      return{
        ...state,
        loading:false,
        data:action.data
      }
    case 'DB_GET_ERROR':
      return{
        ...state,
        loading:false
      }

    case 'TEAM_DATA_PUSH':
      return{
        ...state,
        teamData:[...state.teamData, action.data]
      }

    default:
      return state;
  }
}

export default owner