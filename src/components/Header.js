import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

const Header = () => (
  <div>
    <h1>
    <FormattedMessage id="header.text"/>
    </h1>
    <NavLink to="/" >
      <FormattedMessage id="home.link"
                              defaultMessage="This is a default message"
      />

    </NavLink>
    <NavLink to="/aboutus">
      <FormattedMessage id="aboutUs.link"
                              defaultMessage="This is a default message"
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
