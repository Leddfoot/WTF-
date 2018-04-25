import { createStore, combineReducers} from 'redux';
import fishCaughtOccurencesReducer from '../reducers/fishCaughtOccurrence';
import filtersReducer from '../reducers/filters';


//store creation
export default () => {
  const store = createStore(
    combineReducers({
      fishCaught : fishCaughtOccurencesReducer,
      filters: filtersReducer
    })
  );
  return store;
};
