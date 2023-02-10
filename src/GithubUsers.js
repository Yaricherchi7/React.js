
import { useGithubUsers } from "./useGithubUsers"



    export function GithubUsers({username}){
        const {data, error, isLoading, onRefresh} = useGithubUsers(username) 

        return (
        <div>
            <button onClick={onRefresh}>refresh data</button>
            {isLoading && <h3>Loading..</h3>}
            {error && <h3> an error</h3>}
            {data &&  <h3> {data.name} </h3>}
        </div>
        )
    }