



// action creators => function that will return action objects: 

// action=>


// action are objects in redux 
// action TYpes are names 

// const inc = {
//     type: "INCREASE"
// }

// action creators => functions =>  return actions: 

import { INCREASE, DECREASE, RESET } from "./actionTypes.js";

// INCREASE ACTION:
export const increase =  (value) => {
    return(
        {
            type: INCREASE,
            value: value

        }
    )
}

// DECREASE: 

export const decrease = () =>{
    return(
        {
            type: DECREASE
        }
    )
}

//RESET 

export const reset = () =>{
    return(
        {
            type: RESET
        }
    )
}