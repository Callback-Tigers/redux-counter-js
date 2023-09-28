
import store from "./redux/store.js" 
import { increase, decrease, reset } from "./redux/actions/CounterActions.js"


// getState 

// dispatch

console.log("Initial Value",store.getState()) // get current value of the store

// subscribe to store
store.subscribe(()=>{
    console.log("Updated Value",store.getState())
})

// inc action: 

store.dispatch(increase(5)) 

// store.dispatch({type:INCREASE, value: 5})


// store.dispatch({type: INCREASE})

// store.dispatch(increase(50))

// store.dispatch(increase(10))

// store.dispatch(decrease())

// store.dispatch(reset())



