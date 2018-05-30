//NOTE: TO TEST ME COMMENT OUT APP.JS AND PASTE ME IN IN ENTIRETY

import React from 'react';
import ReactDOM from 'react-dom';

let visible = false;

const testObject = {
  name: 'who cares',
  title: 'the book no one will ever read',
  gonnaShowMe: ['bullshit1', 'bullshit2', 'bullshit3']
}

console.log(testObject.title);


const renderMe = () => {
  const addStuff = (e) => {
    e.preventDefault();
    visible ? visible = false : visible = true;
    console.log(visible);
    renderMe();
  };

  const whatToRender = (
  <div>
    <h1>Visibility Toggle</h1>
    <button onClick={addStuff}>Toggle Me Whoopee!</button>
    <ol>
      {
        visible ? <p>{testObject.title}</p> : ''
      }
    </ol>
  </div>
  );

ReactDOM.render(whatToRender, document.getElementById('app'));

};




renderMe();






//*******************************************************************************
