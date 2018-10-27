import React from 'react';
import AddFishForm from './AddFishForm';
import DisplayStateTester from './DisplayStateTester';

export class AddAFish extends React.Component {

  render(){
    return (
      <div className="content-container">
        <h1>AddAFish stuff going here</h1>
        {/* <DisplayStateTester /> */}
        <AddFishForm />
      </div>
    );
  }
}


export default AddAFish;
