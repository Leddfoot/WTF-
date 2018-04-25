import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// // ADD_FISH_CAUGHT_OCCURRENCE
// const addFishCaughtOccurrence = (
//   {
//     fishType = 'default fish',
//     weight = 'default weight',
//     catchDate = 0
//   } = {}
// ) => ({
//   type: 'ADD_FISH_CAUGHT_OCCURRENCE',
//   fishCaught: {
//     id: uuid(),
//     fishType,
//     weight,
//     catchDate
//   }
// });
//
// // REMOVE_FISH_CAUGHT_OCCURRENCE
// const removeFishCaughtOccurrence = ({ id } = {}) => ({
//   type: 'REMOVE_FISH_CAUGHT_OCCURRENCE',
//   id
// });
//
// // EDIT_FISH_CAUGHT_OCCURRENCE
// const editFishCaughtOccurrence = (id, updates) => ({
//   type: 'EDIT_FISH_CAUGHT_OCCURRENCE',
//   id,
//   updates
// });

// // SET_TEXT_FILTER
// const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// });
//
// //SORT_BY_WEIGHT
// const sortByWeight = () => ({
//   type: 'SORT_BY_WEIGHT'
// });
//
// //SORT_BY_FISHTYPE
// const sortByFishType = () => ({
//   type: 'SORT_BY_FISHTYPE'
// });

// // fishCaughtOccurences Reducer
// const fishCaughtOccurencesReducerDefaultState = [];
// const fishCaughtOccurencesReducer = (state = fishCaughtOccurencesReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_FISH_CAUGHT_OCCURRENCE':
//       return [
//         ...state,
//         action.fishCaught
//       ];
//       state.concat(action.fishCaught)
//     case 'REMOVE_FISH_CAUGHT_OCCURRENCE':
//       return state.filter(( { id } ) => id !== action.id);
//     case 'EDIT_FISH_CAUGHT_OCCURRENCE':
//       return state.map((fishCaught) => {
//         if (fishCaught.id === action.id) {
//           return {
//             ...fishCaught,
//             ...action.updates
//           };
//         } else {
//           return fishCaught;
//         };
//       });
//     default:
//       return state;
//   }
// };

// //Filters reducer
// const filtersReducerDefaultState = {
//   text: '',
//   sortBy: ''
// };
//
// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'SET_TEXT_FILTER':
//     return {
//       ...state,
//       text: action.text
//     };
//     case 'SORT_BY_WEIGHT':
//     return {
//       ...state,
//       sortBy: 'weight'
//     };
//     case 'SORT_BY_FISHTYPE':
//     return {
//       ...state,
//       sortBy: 'fishType'
//     };
//     default:
//       return state;
//   }
// };
//
// //Get visible fishCaughtOccurences
// const getVisiblefishCaughtOccurences = (fishCaught, { text, sortBy }) => {
//   return fishCaught.filter((fishCaught) => {
//     const textMatch = fishCaught.fishType.toLowerCase().includes(text.toLowerCase());
//     return textMatch;
//     //sortBY IS NOT DONE!!!!!!!!
//   });
// };

// //store creation
// const store = createStore(
//   combineReducers({
//     fishCaught : fishCaughtOccurencesReducer,
//     filters: filtersReducer
//   })
// );

store.subscribe(() => {
  const state = store.getState();
  const visiblefishCaughtOccurences = getVisiblefishCaughtOccurences(state.fishCaught, state.filters);
  console.log(visiblefishCaughtOccurences);
});

const firstCatch = store.dispatch(addFishCaughtOccurrence( { fishType:'firstfish', weight:'7 lbs' } ));
const secondCatch = store.dispatch(addFishCaughtOccurrence( { fishType:'catfish', weight:'30 lbs' } ));
store.dispatch(addFishCaughtOccurrence( { fishType:'uglyfish', weight:'12 lbs' } ));
store.dispatch(editFishCaughtOccurrence( secondCatch.fishCaught.id, {weight: 'Okay it was really only 3 lbs'}));
store.dispatch(removeFishCaughtOccurrence( { id: firstCatch.fishCaught.id } ));
store.dispatch(setTextFilter('fir'));
// store.dispatch(sortByWeight());
// store.dispatch(sortByFishType());



//
// const demoState = {
//   fishCaught: [{
//     id: 'asdsampleuserid',
//     fishType: 'cod',
//     weight: '2',
//     catchDate: ''
//   }],
//   filters: [{
//     text: '',
//     sortBy: ''
//   }]
// };


//sanity checking object spread operator
// const loser = {
//   name: 'ahole',
//   age:23
// }
//
// console.log({
//   age: 12, //NOTE THAT THIS DOES NOTHING. IT GETS OVERWRITTEN WHEN OBJECT IS SPREAD BUT BELOW AFTER SPREAD WORKS
//   ...loser,
//   location: '23',
//   age: 100
// });
