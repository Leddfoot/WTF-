// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_WEIGHT
export const sortByWeight = () => ({
  type: 'SORT_BY_WEIGHT'
});

//SORT_BY_FISHTYPE
export const sortByFishType = () => ({
  type: 'SORT_BY_FISHTYPE'
});
