import React, { useEffect, useState } from "react";

export function Counter({
  initialValue = 0,
  increment = 1,
  interval = 1000,
}) {
  const [counter, setCounter] = useState(initialValue);

  const updateCounter = () => {
    setInterval(() => {
      setCounter((counter) => {
        console.log(counter);
        return counter + increment;
      });
    }, interval);
    return clearInterval(updateCounter);
  };
  useEffect(updateCounter, []);

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}
