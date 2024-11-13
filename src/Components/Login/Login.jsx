import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, googleUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    googleUser()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>
            New to this website? Please{" "}
            <Link className="text-blue-500" to="/register">
              Register
            </Link>
          </p>
          <p onClick={handleGoogleLogin}>
            <a className="btn btn-ghost"> Google</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
