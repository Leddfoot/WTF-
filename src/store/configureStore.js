import { createStore, combineReducers} from 'redux';
import fishCaughtOccurencesReducer from '../reducers/fishCaughtOccurrence';
import filtersReducer from '../reducers/filters';
import languageReducer from '../reducers/language';


//store creation
export default () => {
  const store = createStore(
    combineReducers({
      // language: language,
      fishCaught: fishCaughtOccurencesReducer,
      filters: filtersReducer
    })
  );
  return store;
};

const demoState = {
  language: {
    language: 'en/no',
  },
  user: [{
    loggedin: false,
    id: 'asdf78adf78adsf78adfs78', //Will be UUID or anonymous
    userName: 'Darth Vader', //default anonymous
    password: 'abc123',
  }],
  fishCaught: {
    id: 'asdf78adf78adsf78adfs78', //Will be UUID or anonymous
    fishType: 'whale',
    weight: 'unknown/100 lbs/40kg',
    catchDate: 'timestamp', //mpm dateformat
    bait:  'chicken livers and shrimp', //Add this and everything below
    latitude: '59.873666',
    longitude: '10.510816',
    waterTemperature: 'unknown/19c/40f',
    Depth: 'unknown/19ft/40m'
  }


};
