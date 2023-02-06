import { Route, Routes, } from "react-router-dom";
import {Welcome} from "./Welcome"
import { HookCounter } from "./HookCounter";
import { ShowGithubUser } from "./ShowGithubUser";




export function App() {
    return (
        <div>
          <Routes>
             <Route path="/" element={<Welcome/>}/>
             <Route path="/counter" element={<HookCounter/>}/>
             <Route path="users/:username" element={<ShowGithubUser/>}/>
          </Routes>
        </div> 
    );
}
