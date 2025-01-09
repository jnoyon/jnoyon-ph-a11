import React, { useContext, useState } from "react";
import AuthContext from "../assets/context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const {createUser,setUser, updateUser} = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const errorNotification = (notification) => toast.error(notification);
  const successful = () => toast.success('Registration Successful!');

  

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;
  
    // Log the values or use them as needed
    console.log({ name, email, photourl, password });
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      setErrorMsg('Must have an Uppercase letter, a lowercase letter, Length must be at least 6 character');
      errorNotification('Must have an Uppercase letter, a lowercase letter, Length must be at least 6 character');
      return;
    } 
    setErrorMsg('')
    createUser(email, password)
    .then(result => {
      console.log(result.user)
      updateUser({ displayName: name, photoURL: photourl })
      .then(()=>{
        setUser({...result.user, displayName: name, photoURL: photourl})
        successful()
        navigate('/');
      })
      .catch(error=> {
        console.log(error)
        errorNotification("Registration Failed")
      })
    })
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
      <Helmet>
            <title> Registration - Stock Room </title>
        </Helmet>
      <Toaster />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
            <p className="py-6">
              Welcome to Hotel Booking! We're excited to have you join our
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photourl"
                  placeholder="Photo URL"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-red-500 text-sm pb-5 px-5"> {errorMsg} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
