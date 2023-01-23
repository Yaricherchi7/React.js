import { useState } from "react"

export function HookCounter({initialvalue = 0}){
    const [counter,SetCounter] = useState(initialvalue)

    function HandlerCounterIncrement(){
        SetCounter((c)=> c + 1)
    }

    function HandlerCounterReset(){
        SetCounter(initialvalue)
    }

    return (
        <div className="border-slate-500 border-2 flex flex-col justify-center  w-40">
            <h3> Counter: {counter}</h3>
            <button
            onClick={HandlerCounterIncrement}
            className="bg-green-500 text-white border-green-900 border-2 p-1"
            >
            Increment
            </button>
            <button
            className="bg-red-500 text-white border-green-900 border-2 p-1"
            onClick={HandlerCounterReset}
            >
            Reset    
            </button>
        </div>
    )
}