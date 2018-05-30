//NOTE: TO TEST ME COMMENT OUT APP.JS AND PASTE ME IN IN ENTIRETY
// ****************************************************************************************************************
// button example remove below
import React from 'react';
import ReactDOM from 'react-dom';

const testObject = {
  name: 'who cares',
  title: 'the book no one will ever read',
  gonnaChangeMe: ['bullshit1', 'bullshit2', 'bullshit3']
}

const render = () => {

  let count = 0;
  const addOne = () => {
    count ++;
  console.log('button firing' + count)
  render();
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    //Note const below is OK because it is scoped here and destroyed
    const inputTextValue = e.target.elements.testInput.value;
    if (inputTextValue) {
      testObject.gonnaChangeMe.push(inputTextValue);
      console.log(testObject);
      render();
    }
  };

  const buttonTest = (
    <div>
      <button onClick={addOne}>+1</button>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='testInput' />
        <button>Tester</button>
      </form>
      <div className="arrayholder">
        <ol>
          {
          testObject.gonnaChangeMe.map((changed) => {
            return <li>{changed}</li>
          })
          }
        </ol>

      </div>

    </div>
  );
  ReactDOM.render(buttonTest, document.getElementById('app'));

};

render();







// ReactDOM.render(buttonTest, document.getElementById('app'));


// ****************************************************************************************************************
// button example remove above
