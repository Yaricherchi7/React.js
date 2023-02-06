import { Route, Routes, } from "react-router-dom";

import {Welcome} from "./Welcome"
import { HookCounter } from "./HookCounter";




export function App() {
    return (
        <div>
          <Routes>
             <Route path="/" element={<Welcome/>}/>
             <Route path="/counter" element={<HookCounter/>}/>
          </Routes>
        </div> 
    );
}
