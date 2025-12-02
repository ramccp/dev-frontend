import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addToFeed } from "../utils/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  console.log("FEED::", feed);
  async function fetchFeed() {
    try {
      const res = await axios.get(
        "http://localhost:3000/user/feed",
        { withCredentials: true }
      );
      console.log(res.data);
      dispatch(addToFeed(res.data))
    } catch (err) {
        console.log(err)
    }
  }
  useEffect(() => {
    fetchFeed();
  }, []);
  return user ? <div>User Feed</div>: <h1>Please login to continue!</h1>;
};

export default Feed;
