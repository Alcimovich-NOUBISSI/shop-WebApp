
import { Link } from "react-router-dom";

import './UserScreen.css'
import Orders from "../components/User/Orders";
import EditInfo from "../components/User/EditInfo";
import { useState } from "react";


const UserScreen = () => {

  const [option, setOption] = useState(0)

  function ff () {
    console.log('ff function')
  }

  return (
    <div className="row m-0">
      <aside className="user_menu">
        <ul>
          <li><button onClick={()=> setOption(0)} > Edit Info</button> </li>
          <li><button onClick={()=> setOption(1)}> Orders List</button> </li>
        </ul>
      </aside>
      
      <div className="user_body">
        <form className="mb-4" >
          <select onChange={(e) => {setOption(e.target.value); ff() }} className="user_option p-2">
            <option value={0}>Edit Info</option>
            <option value={1}>Orders List</option>
          </select>
        </form>
        {
          option === 0 ? <EditInfo/> : <Orders/>
        }
      </div>
    </div>
  );
}

export default UserScreen;