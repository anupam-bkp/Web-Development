import React from 'react';

import './Person.css';

const person = (props) => {
        return (
            <div className="Person">
                <p onClick={props.click}>I'm {props.name}. My age is {props.age}</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
            </div>
        )  
};

export default person;

// function Person(){
//     return (
//         <p> I'm a person. </p>
//     );
// }

// export default Person;