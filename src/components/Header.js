import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from "react-intl";


// TODO Wire this up, fix this, and refactor
let temporaryLanguage = 'no';

const changeLanguage = (language) => {
  // language === 'en' ? this.temporaryLanguage = 'no' : this.temporaryLanguage = 'en';
  console.log('I dont work. connect to state and refactor')
  // console.log(temporaryLanguage);
};

const Header = () => (
  <div id="header">
    <h1>
    <FormattedMessage id="header.text"/>
    </h1>
    <button id='changeLanguage' onClick={changeLanguage}>
        <FormattedMessage id="header.languageButton"
                                  defaultMessage="Switch Language/Bytt Språk"
        />
    </button>
    <NavLink to="/" >
      <FormattedMessage id="home.link"
                              defaultMessage="This is the dashboard component defaultMessage"
    />
    </NavLink>

    <NavLink to="/latestcatches" >
      <FormattedMessage id="latestcatches.link"
                              defaultMessage="This is the latestcatches component defaultMessage"
      />
    </NavLink>
    <NavLink to="/map" >
      <FormattedMessage id="map.link"
                              defaultMessage="This is the map component defaultMessage"
      />
    </NavLink>

    <NavLink to="/aboutus">
      <FormattedMessage id="aboutUs.link"
                                  defaultMessage="This is the aboutus component defaultMessage"
      />
    </NavLink>

    <NavLink to="/someotherpage" >
      <FormattedMessage id="someotherpage.link"
                              defaultMessage="This is a default message"
      />
    </NavLink>
  </div>
);

export default Header;
