
export type CounterAction=
  { type:"INCREASE_BY",payload: {value:number}}
  |{type:"RESET"};

export const doReset = ():CounterAction => ({type:"RESET"});
export const doIncreaseBy = (value:number):CounterAction => ({type:"INCREASE_BY",payload:{value}})