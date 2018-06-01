import React from 'react';
import { FormattedMessage } from "react-intl";

const AboutUs = () => (
  <div>
    <p>
      <FormattedMessage id="aboutus.mainTextTopBeforeAnchor"
                            defaultMessage="This is a default message"
      />
      <a href="http://www.glacierbearlodge.com">Glacier Bear Lodge</a>
      <FormattedMessage id="aboutus.mainTextTopAfterAnchor"
                              defaultMessage="This is a default message"
      />
  </p>
  <p>
    <FormattedMessage id="aboutus.secondaryTextBeforeAnchor"
                            defaultMessage="This is a default message"
    />
  <a href="https://github.com/Leddfoot/WTF-">Github WTF</a>.
  </p>
  <img src="/images/bigDamnFish.jpg" alt="Three scary looking guys standing by a huge halibut that they have caught and hung up."/>
  </div>
);

export default AboutUs;
