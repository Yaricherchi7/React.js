import { useState } from "react";

export function useUser(){

    const [data,setData] = useState({
        username: "",
        password: "",
        checkbox: false,
    })
    
   function HandleAddInput(event){
    const {value,name,type,checked} = event.target
    setData((data)=> {
        return {
        ...data,
        [name] : type === "chekbox"? checked : value,
        }
    })
   }

   /* GUARDA IL FILE HOOKLOGIN, HO INTEGRATO LI IL LOGIN */
    return ({
        data: data,
        onInputChange: HandleAddInput,
    })

}

