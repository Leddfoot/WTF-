const testStateCreatorDefaultState = [];

export default (state = testStateCreatorDefaultState, action) => {
  switch (action.type) {
    case 'MAKE_NEW_ARRAY':
      return {
        ...state,
        test: action.test,
        language: action.language,
      };
    default:
      return state;
  }
};
