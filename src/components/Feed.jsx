import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addToFeed } from "../utils/feedSlice";
import ProfileCard from "./ProfileCard";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed)
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  console.log("FEED::", feed);
  async function fetchFeed() {
    try {
      const res = await axios.get(
        "/api/user/feed",
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
  if(!feed) return <h1>Loading...</h1>
  if(feed.length===0) return <h1>No new users found!</h1>
  return user ? <UserCard {...feed[0]} />: <h1>Please login to continue!</h1>;
};

export default Feed;
