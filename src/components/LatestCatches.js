import React from 'react';
import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import FishCaughtListItem from './FishCaughtListItem';

const FishCaughtList = (props = {}) => (
  <div className="content-container">
    <h1>
      <FormattedMessage id="latestcatches.header" defaultMessage="Latest Catches"/>
    </h1>
    {props.fishCaught.map((fishCaught) => {
      return <FishCaughtListItem key={fishCaught.id} {...fishCaught} />;
    })}
  </div>
);

// const mapStateToProps = (state) => {
//   // console.log(state.fishCaught[0].id);
//   // console.log(state);
//   return {
//     filters: state.filters,
//     fishCaught: state.fishCaught
//   };
// };
//
// export default connect(mapStateToProps)(FishCaughtList);


// HOW I GOT TO MAP STATE TO PROPS IS BELOW
const ConnectedFishCaughtList = connect((state) => {
  // console.log(state.fishCaught[0].id);
  // console.log(state);
  return {
    filters: state.filters,
    fishCaught: state.fishCaught
  };
}) (FishCaughtList);

export default ConnectedFishCaughtList;
