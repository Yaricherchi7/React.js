

import { useState } from "react";

export function ClickCounter({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue);

    const handleCounterIncrement = () => {
        setCounter(c => c + 1)
    }

    return (

        <div className="flex m-6 flex-col">
            <h2>  Count : {counter}</h2>
            <button  className='border-2 border-black  p-3' onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}