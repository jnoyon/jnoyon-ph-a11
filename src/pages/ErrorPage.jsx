import React from 'react'
import { Link } from 'react-router-dom'
import notfound from "../assets/notfound.json";
import Lottie from 'lottie-react';

export default function ErrorPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-100 via-yellow-50 to-pink-100'>
        <div className='w-1/3 bg-white p-5 rounded-md shadow-md flex flex-col gap-2 items-center'>
        <Lottie animationData={notfound} loop={true} />
            <Link to='/' className='btn bg-red-500 font-bold text-white'> Back to Home </Link>
        </div>
    </div>
  )
}
