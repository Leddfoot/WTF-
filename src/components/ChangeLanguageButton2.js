import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { IntlProvider } from 'react-intl-redux'
import { Provider } from 'react-redux'
import { setLanguage } from '../actions/language';
import {changeLanguage} from './changeLanguage.js';
import { updateIntl } from 'react-intl-redux'

function changeLanguagetest() {
  console.log('sl');


}
changeLanguagetest();

const ChangeLanguageButton2 = (props) => (
  <div>
    <p></p>
    
    <button className="button" id='changeLanguage' onClick={(e)=> {
      e.preventDefault();
      // props.dispatch(setLanguage('no'));
      // changeLanguage('zz');
      // renderRoutes('zz');
      // store.dispatch(renderRoutes('zz');)
        }} >
          <FormattedMessage id="header.languageButton"
                                    defaultMessage="Switch Language/Bytt Språk"
          />
      </button>
  </div>
);

const ConnectedChangeLanguageButton = connect((state)=> {
  const {language: reportedLanguage} = state.language;
  // console.log(state);
  const bullshit = [reportedLanguage];
  // console.log(bullshit[0]);
  const newLanguage = ()=> {
    if (reportedLanguage === 'en') {
      return 'no'
    } else {
      return 'en'
    }
  }
  // console.log(newLanguage(reportedLanguage));
  return {
    bullshit
  };
})(ChangeLanguageButton2);






export default ConnectedChangeLanguageButton;
