import React from 'react';
import { FormattedMessage } from "react-intl";

const AboutUs = () => (
  <div>
    <hr />
    <p>
      <FormattedMessage id="aboutus.mainTextTopBeforeAnchor"
                            defaultMessage="This is a default ssssssssss message"
        />
      <a href="http://www.glacierbearlodge.com">Glacier Bear Lodge</a>
        <FormattedMessage id="aboutus.mainTextTopAfterAnchor"
                              defaultMessage="This is a default message"
          />
  </p>
  <p>WTF@ could use more help. If you like web development as much as lou like fishing, join the team and add
  your pics here. Just submit a pull request on GithubADDLINKHERE or shoot me an emailADD MAILTO HERE.
</p>
  <img src="/images/bigDamnFish.jpg" />
  </div>
);

export default AboutUs;
