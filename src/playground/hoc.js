//HOC simply a component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Information</h1>
    <p>the info is: {props.regularInfo}</p>
  </div>
);

const ExtraOne = (props) => (
  <div>
    <h1>I am number 2 {props.regularInfo}</h1>
    <p>I am number 2</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
    <p>Employees must keep this shit confidential, and you are an employee....</p>
    <WrappedComponent {...props}/>
    </div>
  );
};

const AdminInfo =withAdminWarning(ExtraOne);

ReactDOM.render(<AdminInfo isMember= {true} regularInfo="This is the regular stuff you will see all the time" secretmessage="secretmessage backwards" />, document.getElementById('app'));
