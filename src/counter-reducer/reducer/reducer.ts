import { CounterState } from "../interfaces/interfaces";
import { CounterAction } from "../actions/actions";

export const counterReducer  =({counter, previous,changes}:CounterState, action:CounterAction):CounterState=>{
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