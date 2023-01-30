import { useState } from "react";

 export function useCounter(initialvalue = 0){
    const [counter, setCounter] = useState(initialvalue)

   function HandleIncrement(){
    setCounter((c)=>c + 1)
   } 

   function handleDecrement(){
    setCounter((c)=>c - 1)
   }

   function HandleReset(){
    setCounter(initialvalue)
   }

    return{
        counter : counter,
        onDecrement: handleDecrement,
        onIncrement : HandleIncrement,
        onReset: HandleReset,
    }
}