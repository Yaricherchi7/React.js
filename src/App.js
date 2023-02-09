import { Route, Routes, } from "react-router-dom";
import {Welcome} from "./Welcome"
import { HookCounter } from "./HookCounter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Link } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { GithubUsers } from "./GithubUsers";




export function App() {
    return (
        <div>
          <div className="flex justify-center gap-2">
                <Link className="m-2 p-2 border-2 border-black " to='/'>Welcome</Link>
                <Link className=" m-2 p-2 border-2 border-black " to='/counter'>Counter</Link >
                <Link className="m-2 p-2 border-2 border-black " to='/users/'>Github Profile</Link>
          </div>
          <Routes>
             <Route path="/" element={<Welcome/>}/>
             <Route path="/counter" element={<HookCounter/>}/>
             <Route path="/:username" element={< ShowGithubUser />}/>
             <Route path="/users" element={<GithubUserList/>}>
              <Route path=":username" element={<GithubUsers/>}/>
              <Route index element={<p>Add a user and select it</p>}/>
             </Route>
             <Route path="*" element={
              <div>
                <h2>ERROR 404</h2>
                <h3>Page not found</h3>
                <button className="m-1 p-1 border-2 border-black"><Link to="/">Return to Homepage</Link></button>
              </div>
             }/>
          </Routes>
        </div> 
    );
}
