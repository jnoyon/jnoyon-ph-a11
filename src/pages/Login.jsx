import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AuthContext from "../assets/context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
  const {userSignIn, userSignInWithGoogle} = useContext(AuthContext);

  const errorNotification = (notification) => toast.error(notification);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
  
    // Log the values or use them as needed
    console.log({ email, password });

    userSignIn(email, password)
    .then(result=> {
      console.log('error', result)
    })
    .catch(error => {
      console.log(error)
      errorNotification(error.message);
    })
  }

  const handleGoogleLogin = () => {
    userSignInWithGoogle()
    .then(result=> {
      console.log('errro', result)
    })
    .catch(error => {
      console.log(error)
      errorNotification(error.message);
    })
  }

  return (
    <div>
      <Helmet>
        <title> Login - Stock Room </title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <Toaster />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
            elcome to Hotel Booking! We're excited to have you join our
              community. By creating an account, you’ll unlock exclusive deals
              and offers, making it easier than ever to find and book your dream
              stays. With a registered account, you can manage your bookings
              seamlessly, save your favorite rooms for future stays, and enjoy a
              personalized experience tailored just for you.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <Link className="text-blue-700 text-sm" to="/register">
                  Regiser Now
                </Link>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
              <button onClick={handleGoogleLogin} className="btn btn-success text-white w-full"> Login with Gmail </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
