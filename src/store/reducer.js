const initialState = {
  isLogged: false,
  posts: []
};

// Редюсера има state  and action.
// Първият път когато се рънне, stata е undefined, за това
// създаваме такъв initialState, което default value
const reducer = (state = initialState, action) => {
  if (action.type === 'ISLOGGED') {
    return {
      // всичко което връщаме тука е ще бъде новият state
      ...state,
      isLogged: state.isLogged === true
    };
  }
  return state;
};
export default reducer;
