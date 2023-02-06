 import { useState } from "react";
import { GithubUsers } from "./GithubUsers";

 export function GithubUserList(){
    const [user, setUser] = useState([])
    const [value, setValue] = useState("")


    const HandleAddUser = ()=> {
        setUser([...user,value])
        setValue("")
    }

    const HandleChangeInput = (event)=>{
        setValue(event.target.value)
        setUser([])
    }

    return(
        <div>
            <input className="bg-slate-100" value={value} onChange={HandleChangeInput}/>
            <button onClick={HandleAddUser}>show Profile</button>
            
            <div>
                {user.map((user,index=><GithubUsers key={index} username={user}/>
            ))}
            </div>         
        </div>
    )
 }