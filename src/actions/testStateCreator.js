import uuid from 'uuid';

//make new array


export const makeNewArray = (test = 'bullshit', language ='bslang') => ({
  type: 'MAKE_NEW_ARRAY',
  test,
  language,
});
