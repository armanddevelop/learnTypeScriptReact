import { useReducer } from "react"


interface CounterState {
  counter:number,
  previous:number,
  changes:number
};

const INITIAL_STATE: CounterState = {
  counter:10,
  previous: 15,
  changes: 0
};

type CounterAction=
  { type:"INCREASE_BY",payload: {value:number}}
  |{type:"RESET"};

const counterReducer  =({counter, previous,changes}:CounterState, action:CounterAction):CounterState=>{
 switch (action.type) {
    case "INCREASE_BY":
      return{
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1
      }
    case "RESET":
      return{
        counter: 0,
        previous:0,
        changes:0
      }
    default:
      return {
        counter,
        previous,
        changes
      };
  }
}

export const CounterReducerComp = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const increaseBy =(value:number)=>{
    dispatch({type:"INCREASE_BY",payload:{value}});
  }
  const handleReset=()=>{
    dispatch({type:"RESET"});
  }
  return (
    <>
      <h1>Countet Reducer Component:</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={()=>increaseBy(1)}>+1</button>
      <button onClick={()=>increaseBy(5)}>+5</button>
      <button onClick={()=>increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}
