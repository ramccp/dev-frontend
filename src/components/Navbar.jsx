import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router";

function Navbar(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((store)=>store.user);
  async function handleLogout(){
    try{
      await axios.post("http://localhost:3000/auth/logout",{},{withCredentials:true})
      dispatch(removeUser());
      navigate("/login")
    }
    catch(err){
      console.log("Error logging out:", err);
    }
  }
    return(
        <div className="navbar bg-base-200 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">DevGram {"</>"}</Link>
  </div>
  <div className="flex-none">
    {user && <div className="dropdown dropdown-end mr-5">
      <div tabIndex={0} role="button" className="flex items-center gap-5">
      <p>Welcome, {user.firstName}</p>
      <div className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile photo"
            src={user.avatar} />
        </div>
      </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>}
  </div>
</div>
    )

}

export default Navbar