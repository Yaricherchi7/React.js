
import useSWR from "swr"

const fetcher = url => fetch(url).then((response)=> response.json())

 export const useGithubUsers = (username) =>{
    const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return { 
        data: data,
        isLoading: !data && !error,
        error : error,
    }
}