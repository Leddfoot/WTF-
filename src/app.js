

// *************DO NOT TOUCH BELOW HERE
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';
import { Provider } from 'react-redux';
import locale_En from 'react-intl/locale-data/en';
import locale_no from 'react-intl/locale-data/no';
import messages_no from './translations/no.json';
import messages_en from './translations/en.json';
import configureStore from './store/configureStore';
import { addFishCaughtOccurrence } from './actions/fishCaughtOccurrence.js';
import { makeNewArray } from './actions/testStateCreator.js';
import { setTextFilter } from './actions/filters';
import { setLanguage } from './actions/language';
import getVisiblefishCaughtOccurences from './selectors/fishCaughtOccurrence';
import AddAFish from './components/AddAFish';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
// import Header from './components/Header';
import Header2 from './components/Header2';
import LatestCatches from './components/LatestCatches';
import Map from './components/Map';
import NotFoundPage from './components/NotFoundPage';
import SomeOtherPage from './components/SomeOtherPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


import { updateIntl } from 'react-intl-redux';



// Store
const store = configureStore();
const state = store.getState();
const visiblefishCaughtOccurences = getVisiblefishCaughtOccurences(state.fishCaught, state.filters);

// React-INTL
addLocaleData([...locale_En, ...locale_no]);

const messages = {
  no: messages_no,
  en: messages_en,
};
// const language = navigator.language.split(/[-_]/)[0];

let language = 'en';
console.log(store.getState());
// store.dispatch(setLanguage(language));

// let language = state.language.0;





store.dispatch(addFishCaughtOccurrence({ fishType: 'Kveite', weight: '1 kilo' }));
store.dispatch(addFishCaughtOccurrence({ fishType: 'catfish', weight: '2 kilo' }));
store.dispatch(addFishCaughtOccurrence({ fishType: 'catfish', weight: '3 kilo' }));
store.dispatch(addFishCaughtOccurrence({ fishType: 'catfish', weight: '4 kilo' }));
store.dispatch(addFishCaughtOccurrence({ fishType: 'catfish', weight: '5 kilo' }));
store.dispatch(addFishCaughtOccurrence({ fishType: 'catfish', weight: '7000 kilo' }));
store.dispatch(setLanguage({newLanguage: language}));

// console.log(state);

// store.dispatch(setTextFilter('fi'));

// console.log(store.getState());
// console.log(state)

store.subscribe(() => {
  console.log(store.getState())
});





let routes = '';
const renderRoutes = (newLanguage) => {
  // console.log(state.language);


  routes = (

      <Provider store={store} >
        <IntlProvider locale={language} key={newLanguage} messages={messages[newLanguage]}>
          <BrowserRouter>
            <div>
              {/* <Header /> */}
              <Header2 />
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/map" component={Map} />
                <Route path="/addafish" component={AddAFish} />
                <Route path="/latestcatches" component={LatestCatches} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </IntlProvider>
        </Provider>

  );
}

// language = 'no';
renderRoutes(language);


ReactDOM.render(routes, document.getElementById('app'));
