import { useReducer } from "react"
import {INITIAL_STATE} from "./state/state";
import { counterReducer } from "./reducer/reducer";
import { doIncreaseBy, doReset } from './actions/actions';

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const increaseBy =(value:number)=>{
    dispatch(doIncreaseBy(value));
  }
  const handleReset=()=>{
    dispatch(doReset());
  }
  return (
    <>
      <h1>Countet Reducer Segemented Component:</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={()=>increaseBy(1)}>+1</button>
      <button onClick={()=>increaseBy(5)}>+5</button>
      <button onClick={()=>increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}
