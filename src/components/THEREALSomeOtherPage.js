import React from 'react';
import { FormattedMessage } from "react-intl";

const SomeOtherPage = () => (
  <div>
    <FormattedMessage id="someotherpage.mainText"
                          defaultMessage="This is a default message"
      />

    <h1>Buy Some Cool Stuff</h1>
    <p>Get some cool T shirts or keyholders here...Not really. Just a placeholder.</p>
  </div>
);

export default SomeOtherPage;
