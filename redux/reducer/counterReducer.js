

// logic
// how to inc , dec, reset 


import { DECREASE, INCREASE,RESET } from "../actions/actionTypes.js"




let intitalState = 0

// counterReducer(0, {type: INCREASE})
// counterReducer(0, {type:INCREASE, value: 5})

const counterReducer = (state=intitalState, action) =>{

    switch(action.type){
         case INCREASE: 
               return state + action.value

         case DECREASE: 
                return state-1
         case RESET:
               return intitalState
        default: 
             return state
    }
   
}



// counterReducer(10, {type: INCREASE})


export default counterReducer