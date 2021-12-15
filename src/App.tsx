import {Counter} from "./Components/Counter";
import { CounterBy } from './Components/CounterBy';
import { CounterEffect } from './Components/CounterEffect';
import { CounterHook } from './Components/CounterHook';
import { CounterReducer } from "./counter-reducer/CounterReducer";
//import { CounterReducerComp } from './Components/CounterReducerComp';



function App() {
  const title = "Counter";
  const titleCounterBy = "CounterBy";
  return (
    <>
    <h1>React reinforcement</h1>
     <hr/>
     <h2>Counter Component</h2>
     <Counter initialValue={15} title={title}/>
     <hr/>
     <h2>Counter By Component</h2>
     <CounterBy title={titleCounterBy}/>
     <h2>Counter Effect</h2>
      <CounterEffect/>
      <h2>Counter Hook</h2>
      <CounterHook/>
      <h2>Counter Reducer Component</h2>
      <CounterReducer/>
    </>
  );
}

export default App;
