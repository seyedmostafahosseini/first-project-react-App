import React, {useReducer} from 'react';

const Counter = () => {
    const initnumber = 0 ;
    const reducer = (state,action) => {
        switch(action) {
            case"Up":
             return state +1
            case"Reset":
             return initnumber
            case"Down":
             return state - 1
            default :
             return state
        }
    }
    const[number,dispatch] = useReducer(reducer,initnumber)
    const[number2,dispatch2] = useReducer(reducer,initnumber)
    return (
        <>
            <div>
                <h1>number 1 : {number}</h1>
                <button onClick={() => dispatch("Up")}>Up</button>          
                <button onClick={() => dispatch("Reset")}>Reset</button>       
                <button onClick={() => dispatch("Down")}>Down</button>             
            </div>  
            <br/>
            <div>
                <h1>number 2 : {number2}</h1>
                <button onClick={() => dispatch2("Up")}>Up</button>          
                <button onClick={() => dispatch2("Reset")}>Reset</button>       
                <button onClick={() => dispatch2("Down")}>Down</button>             
            </div>  
        </>
    );
};

export default Counter;