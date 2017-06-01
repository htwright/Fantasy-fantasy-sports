const initialState = {
  data: [],
  loading: false,
  team:[]
}

const teams = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_TEAMS':
      return {
        ...state,
        loading: true
      }
    case 'RECIEVE_TEAMS':
      return {
        ...state,
        data: action.data,
        loading: false
      }
    default:
      return state;
  }
}

export default teams
