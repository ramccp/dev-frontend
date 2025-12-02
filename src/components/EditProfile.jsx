import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";

function EditProfile() {
  const user = useSelector((store) => store.user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [bio, setBio] = useState(user.bio);
  const [avatar, setAvatar] = useState(user.avatar);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  async function handleUpdate() {
    try {
      const res = await axios.patch(
        "http://localhost:3000/profile/edit",
        {
          firstName,
          lastName,
          bio,
          avatar,
          age,
          gender,
        },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res.data.data));
    } catch (err) {
      setError(true);
      setErrorMessage(err?.response.data);
      setTimeout(() => {
        setError(false);
        setErrorMessage("");
      }, 2000);
    }

    // if(!res.ok){
    //     setError(true);
    //     setErrorMessage(res.data?.trim("ERROR :"))
    // }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-4 justify-around items-start">
          <div className="card w-full lg:w-96 bg-base-200 shadow-xl border-2 border-primary/20">
            <div className="card-body p-6">
              <div className="flex justify-center mb-6">
                <h2 className="text-3xl font-bold text-primary">Edit Profile</h2>
              </div>
              <fieldset className="fieldset mb-4">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset mb-4">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset mb-4">
                <legend className="fieldset-legend">Bio</legend>
                <textarea
                  className="textarea textarea-bordered w-full h-24 resize-none"
                  placeholder="Tell us about yourself..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset mb-4">
                <legend className="fieldset-legend">Avatar URL</legend>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Avatar URL"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset mb-4">
                <legend className="fieldset-legend">Age</legend>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset mb-4">
                <legend className="fieldset-legend">Gender</legend>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>
              <div className="mt-6">
                <button
                  onClick={handleUpdate}
                  className="btn btn-primary btn-block"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-96">
            <UserCard {...user} />
          </div>
        </div>
      </div>
      {error && (
        <div className="toast toast-top toast-center mt-15">
          <div className="alert alert-warning">
            <span>{errorMessage}</span>
          </div>
        </div>
      )}
    </>
  );
}
export default EditProfile;
