import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "./Menu";
import AuthContext from "../assets/context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';


export default function Navbar() {
  const signOut = () => toast.success('You have successfully Signed Out!');
  const {user, signOutUser} = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
    .then(result=> {
      signOut();
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="border-b border-solid border-gray-300">
      <Toaster />
      <div className="navbar container mx-auto w-11/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="button bg-blue-500 lg:hidden mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Menu></Menu>
            </ul>
          </div>
          <Link to="/" className="font-bold"> Stock Room </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex gap-5">
            <Menu></Menu>
          </div>
        </div>
        <div className="navbar-end">
          {
              user? <div className="flex items-center gap-3"> <div className="flex items-center gap-1"> <img src={user.photoURL} alt="Photo" className="w-10 h-10 rounded-md" /> <div className="hidden md:block"> <p className="font-bold text-sm"> {user.displayName} </p> <p className="text-xs"> {user.email} </p> </div> </div>  <button className="button bg-red-500" onClick={handleSignOut}> Logout </button> </div> : <div> <NavLink className='button bg-green-500' to="/login"> Login </NavLink> </div>
          }
        </div>
      </div>
    </div>
  );
}
