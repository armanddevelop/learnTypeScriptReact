import { useState } from "react"
interface CounterProps{
  initialValue?:number,
  title?:string // the ? in the interface means that the prop is optional
}

export const Counter = ({initialValue=0,title}:CounterProps) => {
  const [counter, setCounter] = useState(initialValue);
  return (
    <>
      <h1>{title}: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Click to add one in counter</button>
    </>
  )
}
