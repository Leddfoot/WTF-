import { createStore } from 'redux';

const store = createStore((state =
  {
    count: 220,
    name: 'bullshitter'
  },
  action)=> {
  // console.log('running');
  switch (action.type) {
    case 'INCREMENT':
        return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
    return {
      count: state.count - action.decrementBy
    };
    case 'RESET':
      return {
        count: 0
      }
      case 'SET':
        return {
          count: action.count
        }
    case 'CHANGE_NAME':
    return {
      name: 'Newbullshitter'
    };
    default:
      return state;
  }
});


//Subscribe is called everytime there are changes to the store
// store.subscribe(()=> {
//   console.log(store.getState());
// });


// To unsubscribe from the subscription above you can just invoke the function returned by subscribe which
// in this case is just __ unsubscribe(); __. I GET THAT BUT I DIDN'T UNDERSTAND...
// that when I commented out subscribe and above and just declared the constant below,
// why the subscribe continued to run......but now I get it ... the const is an IIFE
const unsubscribe = store.subscribe(()=> {
  console.log(store.getState());
});



// ACTIONS *********************
// an action is only an object that is getting sent to the store
//these are just inline, we will use action generators below instead


const addToCounter = ({ incrementBy = 1 } = {} ) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCounter = ({ decrementBy = 1 } = {} ) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCounter = ({ count = 77} = {} ) => ({
  type: 'SET',
  count
});

const resetCounter = ({} = {} ) => ({
  type: 'RESET',
});



store.dispatch(addToCounter());
store.dispatch(addToCounter( {incrementBy:5} ));

store.dispatch(decrementCounter());
store.dispatch(decrementCounter( {decrementBy:5} ));
store.dispatch(setCounter( {count: 135} ));
store.dispatch(resetCounter());

// console.log(store.getState());



///************RESTORE BELOW HERE TO GET BACK TO ORIGINAL
// //action Generators-functions return action object
// const addToCounter = ( { incrementBy = 1 } = {}) => ({
//   type: 'ADD_TO_COUNTER',
//   incrementBy
// });
//
// const subtractFromCounter = ({ decrementBy = 1 } = {}) => ({
//   type: 'SUBTRACT_FROM_COUNTER',
//   decrementBy
// });
//
// const setCounter = ({ setValue = 1 } = {}) => ({
//   type: 'SET_COUNTER',
//   setValue
// });
//
// const resetCounter = () => ({
//   type: 'RESET_COUNTER'
// });
//
// //Reducers
//
// const countReducer = ((state = { counter: 100 }, action) => {
//   switch (action.type) {
//     case 'ADD_TO_COUNTER':
//     return {
//       counter: state.counter + action.incrementBy
//     };
//     case 'SUBTRACT_FROM_COUNTER':
//     return {
//       counter: state.counter - action.decrementBy
//     };
//     case 'SET_COUNTER':
//     return {
//       counter: action.setValue
//     };
//     case 'RESET_COUNTER':
//     return {
//       counter: 0
//     };
//   default:
//     return state;
//   }
// });
//
// const store =createStore(countReducer);
//
// store.subscribe(() => {
//   console.log(store.getState());
// });
//
//
//
// store.dispatch(addToCounter({incrementBy: 5}));
// store.dispatch(addToCounter());
// store.dispatch(subtractFromCounter({decrementBy: 7}));
// store.dispatch(subtractFromCounter());
// store.dispatch(resetCounter());
// store.dispatch(setCounter({setValue: 777}));



console.log('Change the webpack entry back to src/app.js to get back to the regular app')
