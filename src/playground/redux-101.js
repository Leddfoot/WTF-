import { createStore } from 'redux';

//action Generators-functions return action object
const addToCounter = ( { incrementBy = 1 } = {}) => ({
  type: 'ADD_TO_COUNTER',
  incrementBy
});

const subtractFromCounter = ({ decrementBy = 1 } = {}) => ({
  type: 'SUBTRACT_FROM_COUNTER',
  decrementBy
});

const setCounter = ({ setValue = 1 } = {}) => ({
  type: 'SET_COUNTER',
  setValue
});

const resetCounter = () => ({
  type: 'RESET_COUNTER'
});

//Reducers

const countReducer = ((state = { counter: 100 }, action) => {
  switch (action.type) {
    case 'ADD_TO_COUNTER':
    return {
      counter: state.counter + action.incrementBy
    };
    case 'SUBTRACT_FROM_COUNTER':
    return {
      counter: state.counter - action.decrementBy
    };
    case 'SET_COUNTER':
    return {
      counter: action.setValue
    };
    case 'RESET_COUNTER':
    return {
      counter: 0
    };
  default:
    return state;
  }
});

const store =createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});



store.dispatch(addToCounter({incrementBy: 5}));
store.dispatch(addToCounter());
store.dispatch(subtractFromCounter({decrementBy: 7}));
store.dispatch(subtractFromCounter());
store.dispatch(resetCounter());
store.dispatch(setCounter({setValue: 777}));



console.log('Change the webpack entry back to src/app.js to get back to the regular app')
