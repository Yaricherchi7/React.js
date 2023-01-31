import { useEffect, useRef, } from "react";

export function CarDetail(initialdata){

    let modelValue = useRef()
    let yearValue = useRef()
    let colorValue = useRef()

    useEffect(()=>{
        modelValue.current.value = initialdata.model
        yearValue.current.value = initialdata.year
        colorValue.current.value= initialdata.color
    },[initialdata])


  return (
    <div>
      <input ref={modelValue} type="text" name="model" />
      <input ref={yearValue} type="text" name="year" />
      <input ref={colorValue} type="text" name="color" />
    </div>
  );
}
