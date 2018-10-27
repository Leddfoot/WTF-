import { createStore, combineReducers} from 'redux';
import fishCaughtOccurencesReducer from '../reducers/fishCaughtOccurrence';
import filtersReducer from '../reducers/filters';
import languageReducer from '../reducers/language';
import testStateCreator from '../reducers/testStateCreator';
import { Provider, intlReducer } from 'react-intl-redux'
import { updateIntl } from 'react-intl-redux';


//store creation
export default () => {
  const store = createStore(
    combineReducers({
      language: languageReducer,
      fishCaught: fishCaughtOccurencesReducer,
      filters: filtersReducer,
      testState: testStateCreator,
      intl: intlReducer,
      // locales: localesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

const demoState = {
  language: [{ //NOTE: MUST BE AN ARRAY, REACt WILL NOT WORK WITH CHILD OBJECTS, ONLY ARRAYS
    language: 'en/no',
  }],
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
