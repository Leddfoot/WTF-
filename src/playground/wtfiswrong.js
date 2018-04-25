import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';



console.log('goddammit!!!')

//ADD_PERSON
const addPerson = (
  {
    name = ''
  } = {}
) => ({
  type: 'ADD_PERSON',
  person: {
    id: uuid(),
    name
  }
});

// //REMOVE_CATCH
// const removeCatch = ({ id } = {}) => ({
//   type: 'REMOVE_CATCH',
//   id
// });

// //EDIT_CATCH
// const editCatch = (id, updates) => ({
//   type: 'EDIT_CATCH',
//   id,
//   updates
// });

//people Reducer
const peopleReducerDefaultState = [];
const peopleReducer = (state = peopleReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [
        ...state,
        action.person
      ];
      state.concat(action.person)
    // case 'REMOVE_CATCH':
    //   return state.filter(( { id } ) => id !== action.id);
    // case 'EDIT_CATCH':
    // console.log('tried');
    //   return state.map((people) => {
    //     if (people.id === action.id) {
    //       return {
    //         ...people,
    //         ...action.updates
    //       };
    //     } else {
    //       return people;
    //     };
    //   });
    default:
      return state;
  }
};

// //Filters reducer
// const filtersReducerDefaultState = {
//   text: 'co',
//   sortBy: 'weight',
//   catchDate: undefined
// };
//
// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };


//store creation
const store = createStore(
  combineReducers({
    people : peopleReducer
    // filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const firstPerson = store.dispatch(addPerson( { name: 'first bastard' } ));
const secondPerson = store.dispatch(addPerson( { name: 'cesond bastard' } ));
store.dispatch(addPerson( { fishType:'uglyfish', weight:'12 lbs' } ));
// store.dispatch(editCatch( { id: secondCatch.catch.id,  weight: '28 lbs' } ))
// store.dispatch(removeCatch( { id: firstCatch.catch.id } ));




const demoState = {
  People: [{
    id: 'asdsampleuserid23fer34',
    name: 'who cares'
  }],
  filters: [{
    text: 'co',
    sortBy: 'weight',
    catchDate: undefined
  }]
};

const loser = {
  name: 'bulshit',
  age:33
}
console.log({...loser, name: 'newbullshit', city: 'bfe', age: 1});
