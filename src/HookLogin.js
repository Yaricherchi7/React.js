import { useState } from "react"

export function HookLogin(){

    const [data,SetData] = useState("")

   function handlerInputChange(event){
        const {name, value, type, checked} = event.target
        SetData((data)=> {
            return {
            ...data,
            [name] : type === "chekbox"? checked : value,
            }
        })
    }


    return(
        <div>
            <form onChange={handlerInputChange}>
                <input value={data.username} type="username" name="username"></input>
                <input value={data.password} type="password" name="password"></input>
                <input value={data.remember} type="checkbox" name="remember"></input>
            </form>
        </div>
    )
}