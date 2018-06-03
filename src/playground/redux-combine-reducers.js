import { createStore, combineReducers } from 'redux';

//action generators

const getLanguage = () => ({
  type: 'GET_LANGUAGE'
});



// reducers

const languageReducer = (state = ['en'], action) => {
  switch(action.type) {
    case 'GET_LANGUAGE':
    default:
    return state;
  }
};

let userReducerDefaultState = [false, 'none', 'anonymous', 'noPassword']
const userReducer = (state = userReducerDefaultState, action) => {
  switch(action.type) {
    default:
    return state;
  }
};

let fishCaughtReducerDefaultState = ['anonymous', '59.873666', '10.510816', 'Whale', 'unknownWeight', 'timestamp', 'spinner', 'unknownTemp', 'unknownDepth'];
const fishCaughtReducer = (state = fishCaughtReducerDefaultState, action) => {
  switch(action.type) {
    default:
    return state;
  }
};

//storecreation
const store = createStore(
  combineReducers({
    language: languageReducer,
    user: userReducer,
    fishCaught: fishCaughtReducer
  })
);




//make some noise -- log state with every subscription
// store.subscribe(() => {
//   console.log(store.getState());
// });

const currentLanguage = store.dispatch(getLanguage(

));
console.log(currentLanguage);

store.dispatch(getLanguage());
// console.log(store.getState());
// currentLanguage = store.getstate(language);






const demoState = {
  language: {
    language: 'en',
  },
  user: {
    loggedin: false,
    id: 'asdf78adf78adsf78adfs78', //Will be UUID or anonymous
    userName: 'Darth Vader', //default anonymous
    password: 'abc123',
  },
  fishCaught: {
    userId: 'asdf78adf78adsf78adfs78', //Will be UUID or anonymous
    latitude: '59.873666',
    longitude: '10.510816',
    fishType: 'whale',
    weight: 'unknown/100 lbs/40kg',
    catchDate: 'timestamp', //mpm dateformat
    bait:  'chicken livers and shrimp', //Add this and everything below
    waterTemperature: 'unknown/19c/40f',
    Depth: 'unknown/19ft/40m'
  }
};
