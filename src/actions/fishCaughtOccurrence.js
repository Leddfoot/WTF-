import uuid from 'uuid';

// ADD_FISH_CAUGHT_OCCURRENCE
export const addFishCaughtOccurrence = (
  {
    fishType = 'default fish',
    weight = 'default weight',
    catchDate = 0
  } = {}
) => ({
  type: 'ADD_FISH_CAUGHT_OCCURRENCE',
  fishCaught: {
    id: uuid(),
    fishType,
    weight,
    catchDate
  }
});

// REMOVE_FISH_CAUGHT_OCCURRENCE
export const removeFishCaughtOccurrence = ({ id } = {}) => ({
  type: 'REMOVE_FISH_CAUGHT_OCCURRENCE',
  id
});

// EDIT_FISH_CAUGHT_OCCURRENCE
export const editFishCaughtOccurrence = (id, updates) => ({
  type: 'EDIT_FISH_CAUGHT_OCCURRENCE',
  id,
  updates
});
