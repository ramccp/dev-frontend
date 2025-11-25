function Main() {
  return (
    <div className="card w-96 m-auto my-10 border border-slate-600 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-bold">Welcome back!</h2>
          
        </div>
        <span className="text-center text-slate-500 -mt-4">Please login to continue</span>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input type="text" className="input" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input type="text" className="input" placeholder="Type here" />
        </fieldset>

        <div className="mt-6">
          <button className="btn btn-primary btn-block">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
