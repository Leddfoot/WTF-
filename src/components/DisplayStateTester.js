import React from 'react';
import { connect } from 'react-redux';

const DisplayStateTester = (props) => (
  <div>
    <h1>State displayer whoopee!!!!</h1>
    {props.language}language befoer here
    {props.filters.text}
    {props.testState.language}
  </div>
);

const MapStateToProps = (state) => {
  return {
    language: state.language,
    filters: state.filters,
    fish: state.fishcaught,
    testState: state.testState,
  };
  };

export default connect(MapStateToProps)(DisplayStateTester);
