
import { useCounter } from "./useCounter"

export function HookCounter({initialvalue = 0}){
    const {counter, onDecrement ,onIncrement, onReset} = useCounter(initialvalue)

 

    return (
        <div className="border-slate-500 border-2 flex flex-col justify-center  w-40">
            <h3> Counter: {counter}</h3>
            <button
            onClick={onIncrement}
            className="bg-green-500 text-white border-green-900 border-2 p-1"
            >
            Increment
            </button>
            <button
            onClick={onDecrement}
            className="bg-yellow-500 text-white border-yellow-900 border-2 p-1"
            >
            Decrement
            </button>
            <button
            className="bg-red-500 text-white border-green-900 border-2 p-1"
            onClick={onReset}
            >
            Reset    
            </button>
        </div>
    )
}