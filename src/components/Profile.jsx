import { useSelector } from "react-redux";

function Profile(){
    const user = useSelector((state)=>state.user)
    return(
       user ? <h1>{user.firstName} Profile</h1> : <h1>Please login to view this page!</h1>
    )
}

export default Profile;