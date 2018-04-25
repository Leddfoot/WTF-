import React from 'react';
import { FormattedMessage } from "react-intl";

const AboutUs = () => (
  <div>
    <FormattedMessage id="aboutus.mainText"
                          defaultMessage="This is a default message"
      />
    <hr />
    <p>There is no us yet! It's just me, the handsome guy to the left in the picture. But who cares
    about that, check out that huge halibut, caught on a trip in Yakutat Alaska.We caught that one thanks
    to Captain Bill at the <a href="http://www.glacierbearlodge.com">Glacier Bear Lodge</a>. Actually "we"
    didn't really catch it. My Dad to the right did, but I helped reel it in.</p>
  <p>WTF@ could use more help. If you like web development as much as lou like fishing, join the team and add
  your pics here. Just submit a pull request on GithubADDLINKHERE or shoot me an emailADD MAILTO HERE.</p>
  <img src="/images/bigDamnFish.jpg" />
  </div>
);

export default AboutUs;
