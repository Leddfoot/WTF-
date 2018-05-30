import React from 'react';
import { FormattedMessage } from "react-intl";



// Logged in used for conditional rendering of login and join now TODO
// const loggedIn = true;
const loggedIn = true;

const Dashboard = () => (
  <div>

    <h1><FormattedMessage id="dashboard.welcomeText"
                          defaultMessage="This is a default message"
        /></h1>
      <p><FormattedMessage id="dashboard.mainText"
                            defaultMessage="This is a default message"
        /></p>
      <h1><FormattedMessage id="dashboard.lowerTextHeader"
                          defaultMessage="This is a default message"
      /></h1>
    <p><FormattedMessage id="dashboard.lowerText"
                            defaultMessage="This is a default message"
        /></p>

     {loggedIn &&
       <div>
         <h1>
           <FormattedMessage id="dashboard.joinNow"
                                   defaultMessage="This is a default message"
               />
         </h1>
         <p>
           <FormattedMessage id="dashboard.joinNowMessage"
                                   defaultMessage="This is a default message"
               />
         </p>
         <button>
           <FormattedMessage id="dashboard.joinNowButton"
                                   defaultMessage="This is a default message"
               />
         </button>


         <p>
           <FormattedMessage id="dashboard.signInMessage"
                                   defaultMessage="This is a default message"
               />         </p>
         <button>
           <FormattedMessage id="dashboard.signInButton"
                                   defaultMessage="This is a default message"
               />
         </button>
       </div>
     }
  </div>


);

export default Dashboard;
