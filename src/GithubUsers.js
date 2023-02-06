import {useState, useEffect } from "react";

export function GithubUsers({username}){
    const [data, setData] = useState(null)
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(null)

    async function fetchGithubUser(username){
        setLoading(true)
        setError(null)
        
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()

            setData(json)
        } catch (error) {
            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchGithubUser(username)
    },[username])


    return (
        <div> 
            {loading && <h1>loading...</h1>}
            {data && <h1>{data.name}</h1>}
            {error && <h1> there as been an error..</h1>}
            {data && <img src={data.avatar_url} alt={data.name}/>}
            
        </div>
    )
}
