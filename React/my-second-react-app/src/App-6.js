import React, { Component } from 'react'; 
import './App.css';

import styled from 'styled-components';

import Person from './Person/Person-2';

const StyledBtn = styled.button`

background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
}
`;

class App extends Component {

    state = {
        persons: [
            {id:'1', name:'Anupam', age:'31'},
            {id:'2', name:'Pawan', age:'32'},
            {id:'3', name:'Amit', age:'30'}
        ],
        otherState: 'SomeOther Value',
        showPersons: false
    };

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        });

        // const person = Object.assign({}, this.state.persons[personIndex]);

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; //ES6 feature spread operator
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render(){

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>

                    {this.state.persons.map((person, index) => {
                        return (
                            <Person 
                                key={person.id} 
                                name={person.name} 
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}
                                changed={(event)=> this.nameChangedHandler(event, person.id)}
                            /> 
                        )
                    })}

                </div>
            );

            // btnStyle.backgroundColor='red';
        }

        
        const classes = [];

        if(this.state.persons.length <=2){
            classes.push('red');
        }

        if(this.state.persons.length <=1){
            classes.push('bold');
        }


        return(
            <div className="App">
                <h1>My First React App!</h1>
                <p className={classes.join(' ')}>Some Persons</p>
                <br/>

                <StyledBtn 
                    alt={this.state.showPersons}
                    onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </StyledBtn>
                <hr/>

                {persons}

            </div>
        );
    }
}

export default App;