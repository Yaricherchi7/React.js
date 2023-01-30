import { useCallback, useState } from "react";

 export function useCounter(initialvalue = 0){
    const [counter, setCounter] = useState(initialvalue)

   const HandleIncrement = useCallback( function HandleIncrement(){
    setCounter((c)=>c + 1)
   },[])

   const handleDecrement = useCallback( function handleDecrement(){
    setCounter((c)=>c - 1)
   },[])

  const HandleReset = useCallback( function HandleReset(){
    setCounter(initialvalue)
   },[initialvalue])

    return{
        counter : counter,
        onDecrement: handleDecrement,
        onIncrement : HandleIncrement,
        onReset: HandleReset,
    }
}