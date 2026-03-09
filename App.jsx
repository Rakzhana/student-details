import { useState } from "react";
import data from "./components/Idgrid.json";
import Id from "./components/Id";
import Idgrid from "./components/Idgrid";
import StudentRegForm from "./components/StudentRegForm";

export default function App() {

  const [view, setView] = useState("grid");
  const[search,setSearch]=useState('')
  const[fileredData,setFilteredData]=useState(data)
  const handleNameChange=(e)=>{

    setSearch(e.target.value)
    setFilteredData(
      data.filter(
        (val)=>val.Name.toLowerCase().includes(e.target.value)
      )
    )
    }

  return (
    <div>
      <form>
        <input type="text"
          placeholder="search by name"
          onChange={handleNameChange}
          value={search}/>
          

      </form>

      {/* <StudentRegForm/> */}

      <button onClick={() => setView("grid")}>Grid</button>
      <button onClick={() => setView("table")}>Table</button>

      {view === "grid" && <Idgrid data={fileredData} />}
      {view === "table" && <Id data={fileredData} />}

    </div>
  );
}
