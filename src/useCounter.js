import { useState } from "react";

function useCounter(value = 0){
    const [counter, setCounter] = useState(value)

   function HandleIncrement(){
    setCounter((c)=>c++)
   } 

   function handleDecrement(){
    setCounter((c)=>c--)
   }

   function HandleReset(){
    setCounter(value)
   }

    return{
        counter : counter,
        onDecrement: handleDecrement,
        onIncrement : HandleIncrement,
        onReset: HandleReset,
    }
}