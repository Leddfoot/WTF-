// set Language
export const setLanguage = ({ newLanguage = 'this is default from action generator' } = {}) => ({
  type: 'SET_LANGUAGE',
  newLanguage
});


//Get Language
export const getLanguage = () => ({
  type: 'GET_CURRENT_LANGUAGE',
});
//
// //Change Language
// export const changeLanguage = () => ({
//   type: 'CHANGE_LANGUAGE',
// });
