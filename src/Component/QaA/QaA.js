import React from 'react';
import './QaA.css'
const QaA = () => {
    return (
        <div className='QaA'>
            <h2>How React work?</h2>
            <p>React is a javascript library which is maintained by facebook. React render Component by a algorithom which is called diff algorithom. React is the firstest libarary. it uses a declarative paradigm that makes it easier to reason about our application and aims to be both efficient and flexible.</p>
            <hr/>
            <h2>How useState works?</h2>
            <p>useState is react functional hook that return us an array. First element of this array is a state of variable and second element is a function that is used to set the state of variable. When the state of variable ,the component which is use that variable ,it rerender the component. </p>

        </div>
    );
};

export default QaA;