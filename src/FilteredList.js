import { useMemo } from "react"


export function FilteredList({list}){

    const listUser = useMemo(()=>{
     return  list.filter(user => user.age > 18)
    },[list])
    return(
        <div>
            <ul>
                {listUser.map((item,index) => <li key={index}>{item.name}</li>)}
            </ul>
        </div>
    )
}