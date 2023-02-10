
import useSWR, { mutate } from "swr"

const fetcher = url => fetch(url).then((response)=> response.json())

 export const useGithubUsers = (username) =>{
    const {data, error} = useSWR( username ? `https://api.github.com/users/${username}`: null, fetcher)

    function refreshData(){
        mutate()
    }

    return { 
        data: data,
        error : error,
        isLoading: !data && !error,
        onRefresh: refreshData
    }
}