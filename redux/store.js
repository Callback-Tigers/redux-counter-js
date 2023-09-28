
// {} => context

import { createStore } from "redux";
import counterReducer from "./reducer/counterReducer.js";


const store = createStore(counterReducer)

// x  = counterReducer() 
// x will be stored in store, x = 0

export default store


// inc got triggered: 

// store.dispatch({type:INCREASE, value: 5})

// x = counterReducer(0, {type:INCREASE, value: 5})
// x = 5 
// x will be stored in store
// this mean store got updated





// inc action tiggered: 

// store.dispatch({type: INCREASE})

// x = counterReducer(0, {type: INCREASE}) 
// x = 1 
// store = 1