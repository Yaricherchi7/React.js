import { useParams } from "react-router-dom";
import { GithubUsers } from "./GithubUsers";


export function ShowGithubUser (){
    const {username} =useParams()

    return <div>
        <GithubUsers username={username}/>
    </div>
}