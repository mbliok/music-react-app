const initialState = {
  isLogged: false
};

//
const reducer = (state = initialState, action) => {
  if (action.type === 'ISLOGGED') {
    return {
      isLogged: state.isLogged === true
    };
  }
  return state;
};
export default reducer;
