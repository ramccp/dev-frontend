import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "../utils/userSlice";
function Main() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  async function fetchUserData() {
    // Logic to fetch user data
    const res = await axios.get("http://localhost:3000/profile/view", {
      withCredentials: true,
    });
    console.log("Fetched user data:", res.data);
    dispatch(addUser(res.data));
  }

  useEffect(() => {
    if (!user || !user.id) {
      fetchUserData();
    }
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
