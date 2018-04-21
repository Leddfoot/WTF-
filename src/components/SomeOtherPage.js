import React from 'react';
import { FormattedMessage } from "react-intl";

const SomeOtherPage = () => (
  <div>
    <FormattedMessage id="someotherpage.mainText"
                          defaultMessage="This is a default message"
      />
  </div>
);

export default SomeOtherPage;
