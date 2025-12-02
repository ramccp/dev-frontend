import { Link } from "react-router";
const ProfileCard = ({ user }) => {
  return (
    <div className="w-8/12 mx-auto my-10 relative">
      <Link to="/edit"><button className="absolute z-100 right-0 btn btn-primary">Edit Profile</button></Link>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-lg opacity-60 tracking-wide">
          User Profile
        </li>

        <li className="list-row">
          <div>
            <img className="size-10 rounded-box" src={user.avatar} />
          </div>
          <div>
            <div>{user.firstName + " " + user.lastName}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {user.emailId}
            </div>
          </div>
          <p className="list-col-wrap text-xs">{user.bio}</p>
        </li>
      </ul>
      {/* SKILLS */}
      <ul className="list bg-base-100 rounded-box shadow-md my-5">
        <li className="p-4 pb-2 text-lg opacity-60 tracking-wide">My Skills</li>
        {user.skills.map((skill, index) => {
          return (
            <li className="list-row">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                {index<10?"0"+(index+1):index+1}
              </div>
              {/* <div>
                <img
                  className="size-10 rounded-box"
                  src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                />
              </div> */}
              <div className="flex items-center">
                <div className="text-md">{skill}</div>
                {/* <div className="text-xs uppercase font-semibold opacity-60">
                  Remaining Reason
                </div> */}
              </div>
             
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileCard;
