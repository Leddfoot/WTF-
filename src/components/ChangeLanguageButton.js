import React from 'react';
import { FormattedMessage } from "react-intl";

class ChangeLanguageButton extends React.Component {
  changeLanguage(e) {
    e.preventDefault();
     console.log('I dont work. connect to state and refactor');
  }

  render() {
    return (
      <div>
        <button id='changeLanguage' onClick={this.changeLanguage}>
            <FormattedMessage id="header.languageButton"
                                      defaultMessage="Switch Language/Bytt Språk"
            />
        </button>
      </div>
    );
  }
}

export default ChangeLanguageButton;
