import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToConnection } from "../utils/connectionSlice";

function UserConnections() {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);
  async function fetchUserConnections() {
    const res = await axios.get("/api/user/connections", {
      withCredentials: true,
    });
    console.log(res.data.data);
    dispatch(addToConnection(res.data.data));
  }
  useEffect(() => {
    fetchUserConnections();
  }, []);
  if(!connections){
    return <h1>Loading...</h1>
  }
  if(connections.length===0){
    return <h1>No Connections Found!</h1>
  }
  return (
    <div className="w-8/12 mx-auto my-10 relative">
      <ul className="list bg-base-100 rounded-box shadow-md my-5">
        <li className="p-4 pb-2 text-lg opacity-60 tracking-wide">
          My Requests
        </li>
        {connections.map((req, index) => {
          return (
            <li className="list-row">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                {index < 10 ? "0" + (index + 1) : index + 1}
              </div>
              <div className="flex justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={req.avatar} alt="" className='w-10' />
                </div>
                  <div className="text-md">{req.firstName +" "+req.lastName}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserConnections;
