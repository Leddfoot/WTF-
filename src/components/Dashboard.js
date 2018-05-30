import React from 'react';
import { FormattedMessage } from "react-intl";



// Logged in used for conditional rendering of login and join now TODO
// const loggedIn = true;
const loggedIn = false;

const joinNow =' <h1>Join Now!!</h1><p>Membership is not required to see the data, so check it out if you are just curious. But the site works best when everyone contributes. Membership allows you track your record, and is totally free</p><button>Join Now</button><p>Already a member? Sign in here</p><button>Sign In</button>'



const Dashboard = () => (
  <div>
    <FormattedMessage id="dashboard.mainText"
                          defaultMessage="This is a default message"
      />
    <h1>Welcome to WTF@!</h1>
    <p>WTF@ is an application that tracks and stores fishing results from your
       fishing trips, and from others. This info is gathered and can give valuable
      insight as to what type of fish people have been catching and and where they
      caught them. You can filter the map if you are interested in a particular area,
      and see what type of fish were caught, depth of catch, bait used, time of day
      and more. Hopefully future updates will also show current "cold spots," so you
      don't have to waste a bunch of time fishing where others have already been and aren't
      having any luck.</p>
    <h1>Not sure where to go fishing yet?</h1>
    <p>Check the heatmap! If enough information has been gathered in your area, you can
       check out the heatmap and see a visual picture of where the best action is happening.
       This site was originally designed to track fishing activity in the Oslo Fjord. Oslo
      fjord is huge, and it can be hard as hell to find where the fish are hiding. Currently,
      most of the data collected is from there, but the more this application is used in your
       area, the more information you will have, so tell a friend, and join and start adding
       your information</p>

     {loggedIn &&
       <div><h1>Join Now!!</h1>
         <p>Membership is not required to see the data, so check it out if you are just curious. But
           the site works best when everyone contributes. Membership allows you track your record, and
           is totally free</p>
         <button>Join Now</button>


         <p>Already a member? Sign in here</p>
         <button>Sign In</button></div>
     }
  </div>


);

export default Dashboard;
