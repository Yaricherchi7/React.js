import { useGithubUsers } from "./useGithubUsers"



export function GithubUsers({username}){
 const {data, loading, error, onFetchGithubUser} = useGithubUsers(username)

 function HandleGetUserData(){
    onFetchGithubUser(username)
 }
    return (
        <div> 
            <button className=" border-2 border-black mt-2" onClick={HandleGetUserData}> load user data</button>
            {loading && <h1>loading...</h1>}
            {data && <h1>{data.name}</h1>}
            {error && <h1> there as been an error...</h1>}
            {data && <img src={data.avatar_url} alt={data.name}/>}
            
        </div>
    )
}
