import {useCounter} from "../Hooks/useCounter";
 const MAXIMUN_COUNT = 10;
export const CounterHook = () => {
  const {handleClicks,counter,animateElement} = useCounter({
    maxCount:MAXIMUN_COUNT
  });
  return (
    <>
      <h2 ref={animateElement}>{counter}</h2>
      <button onClick={handleClicks}>Click to add one in counter</button>
    </>
  )
}
