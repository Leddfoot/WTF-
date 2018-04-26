import React from 'react';
import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import FishCaughtListItem from './FishCaughtListItem';

const FishCaughtList = (props) => (
  <div>
    <h1>
      <FormattedMessage id="latestcatches.header" defaultMessage="Latest Catches"/>
    </h1>
    {props.fishCaught.map((fishCaught) => {
      return <FishCaughtListItem key={fishCaught.id} {...fishCaught} />;
    })}
  </div>
);

const ConnectedFishCaughtList = connect((state) => {
  console.log(state.fishCaught);
  return {
    filters: state.filters,
    fishCaught: state.fishCaught
  };
}) (FishCaughtList);

export default ConnectedFishCaughtList;
