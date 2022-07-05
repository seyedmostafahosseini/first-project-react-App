import React , {useReducer} from 'react';

const NewCounter = () => {
    const initialNumber = {
        num1 : 0,
        num2 : 0,
    };
    const reducer = (state,action) => {
      switch(action.type) {
        case"Up":
           return {...state, num1 : state.num1 + action.amount}
        case"Up2":
           return {...state, num2 : state.num2 + action.amount}
        case"Reset":
           return initialNumber
        case"Down":
           return {...state, num1 : state.num1 - action.amount}
        case"Down2":
           return {...state, num2 : state.num2 - action.amount}
        default:
           return  state
      }  
    }
    const[number,dispatch] = useReducer(reducer,initialNumber)
    return (
        <div>
            <div>
                <h1> number 1 : {number.num1}</h1>
                <button onClick={() => dispatch({type:"Up" ,amount :25})}>Up</button>
                <button onClick={() => dispatch({type:"Reset"})}>Reset</button>
                <button onClick={() => dispatch({type:"Down", amount : 5})}>Down</button>
            </div>
            <div>
                <h1>number 2 :  {number.num2}</h1>
                <button onClick={() => dispatch({type:"Up2" ,amount:5})}>Up2</button>
                <button onClick={() => dispatch({type:"Reset" ,})}>Reset2</button>
                <button onClick={() => dispatch({type:"Down2", amount:2})}>Down2</button>
            </div>
        </div>
    );
};

export default NewCounter;