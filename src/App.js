import { FilteredList } from "./FilteredList";


export function App() {

  const list = [
    {id: 1, name:"yari", age: 27},
    {id: 2, name: "bianca", age: 20},
    {id: 3, name: "michele", age: 16},
    {id: 4, name: "antonio", age: 14}
]

    return (
      <div>
        <FilteredList list={list}/>
      </div>
    );
}
