import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { setLanguage } from '../actions/language'; //This should be unneccessary. this should be coming from connect

export const ChangeLanguageButton = ({ setLanguage }) => (
  <div>
    <button className="button" id='changeLanguage' onClick={() => setLanguage('en')}>
      <FormattedMessage id="header.languageButton"
        defaultMessage="Switch Language/Bytt Språk"
      /><br/>I don't work yet.
    </button>
  </div>
);

// class ChangeLanguageButton extends React.Component {
//
//   render() {
//     return (
//       <div>
//         <button className="button" id='changeLanguage' onClick={this.changeLanguage}>
//             <FormattedMessage id="header.languageButton"
//                                       defaultMessage="Switch Language/Bytt Språk"
//             />
//         </button>
//       </div>
//     );
//   }
// }


const mapDispatchToProps = (dispatch) => ({
  setLanguage: () => dispatch(setLanguage())
});

// export default ChangeLanguageButton;
export default connect(undefined, mapDispatchToProps)(ChangeLanguageButton);
