import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

const NotFoundPage = () => (
  <div>
    <FormattedMessage id="404.mainText"
                          defaultMessage="this is the 404 default text!!"
      />
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
