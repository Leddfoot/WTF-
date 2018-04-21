import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { IntlProvider  } from "react-intl";
import { FormattedMessage } from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_no from 'react-intl/locale-data/no';
import messages_no from "./translations/no.json";
import messages_en from "./translations/en.json";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import SomeOtherPage from "./components/SomeOtherPage";
import NotFoundPage from "./components/NotFoundPage";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

addLocaleData([...locale_en, ...locale_no]);

const messages = {
    'no': messages_no,
    'en': messages_en
};
//const language = navigator.language.split(/[-_]/)[0];
 const language = 'no';


const routes = (
  <IntlProvider locale={language} messages={messages[language]}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/someotherpage" component={SomeOtherPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
</IntlProvider>

);

ReactDOM.render(routes, document.getElementById('app'));
