import React, { Component } from 'react'; 
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
 
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
                    <Persons 
                      persons = {this.state.persons}
                      clicked = {this.deletePersonHandler}
                      changed = {this.nameChangedHandler}
                    />
            );
        }

        return(
            <div className={classes.App}>
                
                <Cockpit 
                  title = {this.props.appTitle} 
                  showPersons={this.state.showPersons}
                  persons={this.state.persons}
                  clicked={this.togglePersonsHandler}/>

                {persons}

            </div>
        );
    }
}

export default App;