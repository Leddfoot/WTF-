// fishCaughtOccurences Reducer
const fishCaughtOccurencesReducerDefaultState = [];

export default (state = fishCaughtOccurencesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_FISH_CAUGHT_OCCURRENCE':
      return [
        ...state,
        action.fishCaught
      ];
      state.concat(action.fishCaught)
    case 'REMOVE_FISH_CAUGHT_OCCURRENCE':
      return state.filter(( { id } ) => id !== action.id);
    case 'EDIT_FISH_CAUGHT_OCCURRENCE':
      return state.map((fishCaught) => {
        if (fishCaught.id === action.id) {
          return {
            ...fishCaught,
            ...action.updates
          };
        } else {
          return fishCaught;
        };
      });
    default:
      return state;
  }
};
