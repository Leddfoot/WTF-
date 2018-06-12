import React from 'react';
import { FormattedMessage } from "react-intl";

export class AddFishForm extends React.Component {

  render(){
    return (
      <div className="content-container">
        <ul>
          <li><p><FormattedMessage id="addfishform.fishtype" defaultMessage="Fish Type" />:</p><input type="text" /></li>
          <li><p><FormattedMessage id="addfishform.weight" defaultMessage="Weight" />:</p><input type="text" /></li>
          <li><p><FormattedMessage id="addfishform.datecaught" defaultMessage="Date Caught" />:</p><input type="text" /></li>
          <li><p><FormattedMessage id="addfishform.bait" defaultMessage="Bait Used" />:</p><input type="text" /></li>
          <li><p><FormattedMessage id="addfishform.watertemperature" defaultMessage="Water Temperature" />:</p><input type="text" /></li>
          <li><p><FormattedMessage id="addfishform.depth" defaultMessage="Depth Caught" />:</p><input type="text" /></li>
          <li><p>Bring the lat long in auto and ask confirmation:</p><input type="text" /></li>
          <li><p>Bring the uuid or anon in auto</p><input type="text" /></li>
        </ul>
      </div>
    );
  }
}


export default AddFishForm;
