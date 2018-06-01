import React from 'react';
import { FormattedMessage } from "react-intl";



// Logged in used for conditional rendering of login and join now TODO
// const loggedIn = true;
const loggedIn = true;

const Dashboard = () => (
  <div className="box-layout">

    <h1><FormattedMessage id="dashboard.welcomeText"
                          defaultMessage="Welcome to WTF@?"
        /></h1>
      <p><FormattedMessage id="dashboard.mainText"
                            defaultMessage="WTF@ is an application that tracks and stores fishing results from your
 fishing trips, and from others. This info is gathered and can give valuable
 insight as to what type of fish people have been catching and and where they
 caught them. You can filter the map if you are interested in a particular area,
 and see what type of fish were caught, depth of catch, bait used, time of day
 and more. Hopefully future updates will also show current cold spots, so you
 don't have to waste a bunch of time fishing where others have already been and aren't
 having any luck."
        /></p>
      <h1><FormattedMessage id="dashboard.lowerTextHeader"
                          defaultMessage="Not sure where to go fishing yet?"
      /></h1>
    <p><FormattedMessage id="dashboard.lowerText"
                            defaultMessage="Check the heatmap! If enough information has been gathered in your area, you can check out the heatmap and see a visual picture of where the best action is happening. This site was originally designed to track fishing activity in the Oslo Fjord. Oslo fjord is huge, and it can be hard as hell to find where the fish are hiding. Currently, most of the data collected is from there, but the more this application is used in your area, the more information you will have, so tell a friend, and join and start adding your catches."
        /></p>

     {loggedIn &&
       <div>
         <h1>
           <FormattedMessage id="dashboard.joinNow"
                                   defaultMessage="Join Now"
               />
         </h1>
         <p>
           <FormattedMessage id="dashboard.joinNowMessage"
                                   defaultMessage="Membership is free and not required"
               />
         </p>
         <button className="button">
           <FormattedMessage id="dashboard.joinNowButton"
                                   defaultMessage="Join Now"
               />
         </button>


         <p>
           <FormattedMessage id="dashboard.signInMessage"
                                   defaultMessage="Already a member? Sign in here."
               />         </p>
         <button className="button">
           <FormattedMessage id="dashboard.signInButton"
                                   defaultMessage="Sign In"
               />
         </button>
       </div>
     }
  </div>


);

export default Dashboard;
