
import { useGithubUsers } from "./useGithubUsers"



    export function GithubUsers({username}){
        const {data, error, isLoading} = useGithubUsers(username) 

        return (
        <div>
            {isLoading && <h3>Loading..</h3>}
            {error && <h3> an error</h3>}
            {data?.id && (
                <ul>
                    {data.map((user)=>(
                        <li key={user.name}>{user.name}</li>
                    ))}
                </ul>
            ) }
        </div>
        )
    }