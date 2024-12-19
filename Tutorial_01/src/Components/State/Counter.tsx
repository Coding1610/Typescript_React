// type with useReducer()

import { useReducer } from "react"

type StateType = {
    count:number;
}

type InDeType = {
    type:'increment'|'decrement';
    payload:number;
}

type ResetType = {
    type:'reset';
}

type ActionType = InDeType | ResetType;

const initialState = {count:0};

function reducer(state:StateType,action:ActionType){
    switch(action.type){
        case 'increment' :
            return { count : state.count + action.payload }
        case 'decrement' : 
            return { count : state.count - action.payload }
        case 'reset' : 
            return initialState;
        default :
            return state;
    }
}

export default function Counter() {

    const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
        Count : {state.count}
        
        <button onClick={() => dispatch({type:'increment', payload:1})}>
            Increament
        </button>
        
        <button onClick={() => dispatch({type:'decrement', payload:1})}>
            Decrement
        </button>

        <button onClick={() => dispatch({type:'reset'})}>
            Reset
        </button>

    </>
  )
}