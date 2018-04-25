import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';


//ADD_CATCH
const addCatch = (
  {
    fishType = '',
    weight = '',
    catchDate = 0
  } = {}
) => ({
  type: 'ADD_CATCH',
  catch: {
    id: uuid(),
    fishType,
    weight,
    catchDate
  }
});

//REMOVE_CATCH
const removeCatch = ({ id } = {}) => ({
  type: 'REMOVE_CATCH',
  id
});

//EDIT_CATCH
const editCatch = (id, updates) => ({
  type: 'EDIT_CATCH',
  id,
  updates
});

//catches Reducer
const catchesReducerDefaultState = [];
const catchesReducer = (state = catchesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CATCH':
      return [
        ...state,
        action.catch
      ];
      state.concat(action.catch)
    case 'REMOVE_CATCH':
      return state.filter(( { id } ) => id !== action.id);
    case 'EDIT_CATCH':
    console.log('tried');
      return state.map((catches) => {
        if (catches.id === action.id) {
          return {
            ...catches,
            ...action.updates
          };
        } else {
          return catches;
        };
      });
    default:
      return state;
  }
};

//Filters reducer
const filtersReducerDefaultState = {
  text: 'co',
  sortBy: 'weight',
  catchDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


//store creation
const store = createStore(
  combineReducers({
    catches : catchesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const firstCatch = store.dispatch(addCatch( { fishType:'firstfish', weight:'7 lbs' } ));
const secondCatch = store.dispatch(addCatch( { fishType:'Catfish', weight:'30 lbs' } ));
store.dispatch(addCatch( { fishType:'uglyfish', weight:'12 lbs' } ));
store.dispatch(editCatch( { id: secondCatch.catch.id,  weight: '28 lbs' } ))
store.dispatch(removeCatch( { id: firstCatch.catch.id } ));




const demoState = {
  catches: [{
    id: 'asdsampleuserid',
    fishType: 'cod',
    weight: '2',
    catchDate: undefined
  }],
  filters: [{
    text: 'co',
    sortBy: 'weight',
    catchDate: undefined
  }]
};

// const loser = {
//   name: 'bulshit',
//   age:33
// }
// console.log({...loser, name: 'newbullshit', city: 'bfe'});
