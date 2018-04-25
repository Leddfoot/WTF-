//Filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: ''
};

export default(state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    };
    case 'SORT_BY_WEIGHT':
    return {
      ...state,
      sortBy: 'weight'
    };
    case 'SORT_BY_FISHTYPE':
    return {
      ...state,
      sortBy: 'fishType'
    };
    default:
      return state;
  }
};
