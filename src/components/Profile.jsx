import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";

function Profile(){
    const user = useSelector((state)=>state.user)
    return(
       user ? <ProfileCard user={user} /> : <h1 className="my-10 text-xl">Please login to view this page!</h1>
    )
}

export default Profile;