import { Route, Routes, } from "react-router-dom";
import {Welcome} from "./Welcome"
import { HookCounter } from "./HookCounter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Link } from "react-router-dom";




export function App() {
    return (
        <div>
          <div className="flex justify-center gap-2">
                <Link className="m-2 p-2 border-2 border-black " to='/'>Welcome</Link>
                <Link className=" m-2 p-2 border-2 border-black " to='/counter'>Counter</Link >
                <Link className="m-2 p-2 border-2 border-black " to='/users/Yaricherchi7'>Github Profile</Link>
          </div>
          <Routes>
             <Route path="/" element={<Welcome/>}/>
             <Route path="/counter" element={<HookCounter/>}/>
             <Route path="users/:username" element={<ShowGithubUser/>}/>
          </Routes>
        </div> 
    );
}
