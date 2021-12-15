import { useState, useEffect, useRef } from "react"
import {gsap} from "gsap";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClicks = () =>{
    //if (counter < MAXIMUN_COUNT) setCounter(counter + 1);
    setCounter (prev =>Math.min(prev + 1, MAXIMUN_COUNT));
  }
  useEffect(() => {
    if ( counter < MAXIMUN_COUNT) return;
    console.log("%cSe llego al valor maximo","color: red; background-color: black");
    const timeLine = gsap.timeline();
    timeLine.to(counterElement.current,{ y: -10, duration: 0.2, ease: "ease.out"})
      .to(counterElement.current,{ y: 0, duration: 1, ease: "bounce.out"});
  }, [counter])
  return (
    <>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClicks}>Click to add one in counter</button>
    </>
  )
}
