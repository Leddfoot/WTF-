// language Reducer
const languageReducerDefaultState = {};

export default (state = languageReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
    return {
      currentLanguage: action.newLanguage
    }
    default:
      return state;
  }
};
