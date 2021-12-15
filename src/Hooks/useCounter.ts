import { useState, useRef, useLayoutEffect, useEffect } from "react"
import {gsap} from "gsap";
export const useCounter =({maxCount = 1})=>{
  const [counter, setCounter] = useState(5);
  const animateElement = useRef<any>(null);
  const timeLine = useRef(gsap.timeline());

  const handleClicks = () =>{
    setCounter (prev =>Math.min(prev + 1, maxCount));
  }
  useLayoutEffect(() => {
    if ( !animateElement?.current ) return;
    console.log("%cSe llego al valor maximo","color: red; background-color: black", animateElement.current);
    timeLine.current.to(animateElement.current,{ y: -10, duration: 0.2, ease: "ease.out"})
      .to(animateElement.current,{ y: 0, duration: 1, ease: "bounce.out"})
      .pause();
  }, []);
  useEffect(() => {
    timeLine.current.play(0);
  }, [counter])
  return{
      handleClicks,
      counter,
      animateElement
  }
}