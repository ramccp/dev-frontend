function UserCard({ firstName,lastName,age,bio,gender,avatar,user }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={avatar}
          alt={firstName + "Image"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName+" "+lastName}</h2>
        <p className="text-slate-200">{age}, {gender}</p>
        <p>
          {bio}
        </p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
