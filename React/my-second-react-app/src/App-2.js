import React, { Component } from 'react'; 
import './App.css';

import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: 'Anupam', age: '31'},
            {name: 'Pawan', age: '32'},
            {name: 'Amit', age: '30'}
        ],
        otherState: 'SomeOther Value'
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: '28'},
                {name: 'Pawan', age: '32'},
                {name: 'Amit', age: '33'}
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Anupam', age: '28'},
                {name:  event.target.value, age: '32'},
                {name: 'Amit', age: '33'}
            ]
        });
    };


    render(){

        const btnStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return(
            <div className="App">
                <h1>My First React App!</h1>
                <br/>

                {/* <button onClick={this.switchNameHandler.bind(this, 'Bittu')}>Switch Name</button> */}

                <button 
                    style={btnStyle}
                    onClick={() => this.switchNameHandler('Bittu')}>Switch Name</button>
                <hr/>
                <Person name={this.state.persons[0].name} 
                        age={this.state.persons[0].age} >My Hobbies: Racing</Person>
                 
                <Person name={this.state.persons[1].name} 
                        age={this.state.persons[1].age} 
                        click={this.switchNameHandler.bind(this, 'Anupam')}
                        changed={this.nameChangedHandler} />

                <Person name={this.state.persons[2].name} 
                        age={this.state.persons[2].age} />

            </div>

        );
    }
}

export default App;