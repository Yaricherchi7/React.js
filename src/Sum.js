import React from "react";

export function Sum({number = [1,2,3,4,5,6,7,8,9,10]}){
     /* const sum = {number} */

    return (
        <div>
            <h1> the sum of array is: {number.reduce((a,b)=>(a + b))}</h1>
        </div>
    )
    
}