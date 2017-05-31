const initialState = {
  data: [],
  loading: false
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
    default:
      return state;
  }
}

export default players