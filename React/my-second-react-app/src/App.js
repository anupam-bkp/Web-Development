import React from 'react';
import './App.css';

import Person from './Person/Person';

const switchNameHandler = () => {
  console.log('Switch Name Handler clicked!!');
};

function App() {
  return (
    <div className="App">
      <h1>My First React App!</h1>
      <br/>

        <button onClick={switchNameHandler}>Switch Name</button>

      <hr/>
      <Person name="Anupam" age="30" >My Hobbies: Racing</Person>
      <Person name="Pawan" age="31" />
    </div>
  );

  // return React.createElement("div", {className: 'App'}, 
  //                           React.createElement("h1", null, "This is React App!!!"));

}

export default App;