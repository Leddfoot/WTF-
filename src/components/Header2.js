import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import ChangeLanguageButton2 from './ChangeLanguageButton2';
// import ChangeLanguageButton from './ChangeLanguageButton';
import { connect } from 'react-redux';


  function log() {
    console.log(this.props);
  }

const Header2 = (props) => (


  <div className="header" id="header">
    <div className="content-container">
      <div className="header__content">
        <h1 className="header__text">
          <FormattedMessage id="header.text"/>
        </h1>
        <ChangeLanguageButton2 />
        
      </div>
    </div>

    <div className="future-navbar">
      <div className="content-container">
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

        <NavLink to="/addafish" >
          <FormattedMessage id="addafish.link"
                                      defaultMessage="This is a default message"
          />
        </NavLink>

        <NavLink to="/aboutus">
          <FormattedMessage id="aboutUs.link"
                                      defaultMessage="This is the aboutus component defaultMessage"
          />
        </NavLink>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    language: state.language,
    fishCaught: state.fishCaught,
    filters: state.filters
  }
};

export default connect (mapStateToProps)(Header2);
