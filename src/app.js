import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { IntlProvider  } from "react-intl";
import { Provider  } from "react-redux";
import { FormattedMessage } from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_no from 'react-intl/locale-data/no';
import messages_no from "./translations/no.json";
import messages_en from "./translations/en.json";
import configureStore from './store/configureStore';
import { addFishCaughtOccurrence } from './actions/fishCaughtOccurrence.js';
import { setTextFilter } from './actions/filters';
import getVisiblefishCaughtOccurences from './selectors/fishCaughtOccurrence';
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Map from "./components/Map";
import NotFoundPage from "./components/NotFoundPage";
import SomeOtherPage from "./components/SomeOtherPage";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//Store
const store = configureStore();


store.dispatch(addFishCaughtOccurrence( { fishType:'firstfish', weight:'7 lbs' } ));
store.dispatch(addFishCaughtOccurrence( { fishType:'catfish', weight:'30 lbs' } ));
store.dispatch(setTextFilter('fi'));

const state = store.getState();
const visiblefishCaughtOccurences = getVisiblefishCaughtOccurences(state.fishCaught, state.filters);
console.log(visiblefishCaughtOccurences);


// console.log(store.getState());



// React-INTL
addLocaleData([...locale_en, ...locale_no]);

const messages = {
    'no': messages_no,
    'en': messages_en
};
//const language = navigator.language.split(/[-_]/)[0];
 const language = 'no';

// React Router
const routes = (
  <IntlProvider locale={language} messages={messages[language]}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/map" component={Map} />
          <Route path="/someotherpage" component={SomeOtherPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
</IntlProvider>

);

ReactDOM.render(routes, document.getElementById('app'));
