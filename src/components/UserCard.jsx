import axios from "axios";
import { useDispatch } from "react-redux";
import { clearFromFeed } from "../utils/feedSlice";
function UserCard({ firstName, lastName, age, bio, gender, avatar, _id }) {

  const dispatch = useDispatch();
  async function handleFeedConnection(status) {
    const res = await axios.post(
      "/api/connection/" + status + "/" + _id,
      {},
      { withCredentials: true }
    );
    console.log(res.data);
    dispatch(clearFromFeed(_id))

  }
  return (
    <div className="card w-96 shadow-sm mx-auto border bg-base-300 p-4">
      <figure>
        <img src={avatar} alt={firstName + "Image"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p className="text-slate-200">
          {age}, {gender}
        </p>
        <p>{bio}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>handleFeedConnection("ignore")}>Ignore</button>
          <button className="btn btn-primary" onClick={()=>handleFeedConnection("like")}>Interested</button>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
