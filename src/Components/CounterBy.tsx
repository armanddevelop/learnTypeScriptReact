import { useState } from "react"
interface CounterProps{
  initialValue?:number,
  title?:string // the ? in the interface means that the prop is optional
}
interface CounterState{
  counter: number,
  clicks: number
}

export const CounterBy = ({initialValue=5,title}:CounterProps) => {
  const [{counter,clicks}, setCounterState] = useState<CounterState>({
    counter:initialValue,
    clicks: 0
  });
  //const {counter, clicks} = counterState;
  const handleClick = (add:number)=>{
  if (add===5) {
      setCounterState({
        counter:counter + add,
        clicks:clicks + 1
      });
    } else {
      setCounterState({
        counter,
        clicks:clicks + add
      });
    }
  }
  return (
    <>
      <h1>{title}: {counter}</h1>
      <h1>Click value: {clicks}</h1>
      <button onClick={()=>handleClick(5)}>Click to add five in counter</button>
      <button onClick={()=>handleClick(1)}>Click to add one in clicks</button>
    </>
  )
}