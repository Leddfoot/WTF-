import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { setLanguage } from '../actions/language';
import {changeLanguage} from './changeLanguage.js';


// let changeLanguage = function() {
//    console.log(bullshit);
// };
//
// changeLanguage()

const ChangeLanguageButton2 = (props) => (
  <div>
    <p></p>
    <button>bullshit language is: {props.bullshit}</button>
      <button className="button" id='changeLanguage' onClick={(e)=> {
          e.preventDefault();
          props.dispatch(setLanguage('no'));
          changeLanguage('zz');
        }} >
          <FormattedMessage id="header.languageButton"
                                    defaultMessage="Switch Language/Bytt Språk"
          />
      </button>
  </div>
);

class ConnectedChangeLanguageButton extends Component {

}


const ConnectedChangeLanguageButton = connect((state)=> {
  const {language: reportedLanguage} = state.language;
  console.log(state.language);
  const bullshit = [reportedLanguage];
  console.log(bullshit[0]);
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
