// language Reducer
const languageReducerDefaultState = [];

export default (state = languageReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_LANGUAGE':
      return [
        ...state,
        action.language
      ];
      state.concat(action.language)

    default:
      return state;
  }
};
