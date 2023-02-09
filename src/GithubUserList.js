 import { useState } from "react";
import { GithubUsers } from "./GithubUsers";
import { Link, Outlet } from "react-router-dom";

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
                {user.map((user,index=> 
            <li key={index}> <Link to={user}> Show user {user}</Link>
            </li>
            ))}
            </div>  
            <Outlet/>       
        </div>
    )
 }