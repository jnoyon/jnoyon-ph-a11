import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import noyon from '../assets/noyon-new.jpg'

export default function Teams() {
  return (
    <div className='bg-gradient-to-r from-indigo-100 via-yellow-50 to-pink-100 py-10'>
        <h1 className='text-center text-2xl font-bold md:text-5xl mb-5'> Our <span className="text-blue-500"> Teams </span> </h1>
        <div className="flex flex-col md:flex-row w-11/12 mx-auto gap-5">
            <div className="md:w-1/4 bg-white shadow-md rounded-md flex flex-col items-center py-5">
                <img src={noyon} alt="User" className='rounded-full h-32 w-32 mb-2' />
                <h2 className='font-bold'> Jihadur Rahman Noyon </h2>
                <span className='text-sm text-gray-600'> CEO, Stock Room </span>
                <div className="mt-5 flex gap-1">
                    <a href="#"> <FaSquareFacebook className="text-3xl text-blue-500" /> </a>
                    <a href="#"> <FaSquareXTwitter className="text-3xl text-black" /> </a>
                    <a href="#"> <FaWhatsappSquare className="text-3xl text-green-500" /> </a>
                    <a href="#"> <FaLinkedin className="text-3xl text-blue-500" /> </a>
                </div>
            </div>
            <div className="md:w-1/4 bg-white shadow-md rounded-md flex flex-col items-center py-5">
                <img src="https://i.ibb.co.com/D0L4hKj/user.png" alt="User" className='rounded-full h-32 w-32 mb-2' />
                <h2 className='font-bold'> Abir Uddin </h2>
                <span className='text-sm text-gray-600'> Manager, Stock Room </span>
                <div className="mt-5 flex gap-1">
                    <a href="#"> <FaSquareFacebook className="text-3xl text-blue-500" /> </a>
                    <a href="#"> <FaSquareXTwitter className="text-3xl text-black" /> </a>
                    <a href="#"> <FaWhatsappSquare className="text-3xl text-green-500" /> </a>
                    <a href="#"> <FaLinkedin className="text-3xl text-blue-500" /> </a>
                </div>
            </div>
            <div className="md:w-1/4 bg-white shadow-md rounded-md flex flex-col items-center py-5">
                <img src="https://i.ibb.co.com/D0L4hKj/user.png" alt="User" className='rounded-full h-32 w-32 mb-2' />
                <h2 className='font-bold'> Sabbir Rahman </h2>
                <span className='text-sm text-gray-600'> CTO, Stock Room </span>
                <div className="mt-5 flex gap-1">
                    <a href="#"> <FaSquareFacebook className="text-3xl text-blue-500" /> </a>
                    <a href="#"> <FaSquareXTwitter className="text-3xl text-black" /> </a>
                    <a href="#"> <FaWhatsappSquare className="text-3xl text-green-500" /> </a>
                    <a href="#"> <FaLinkedin className="text-3xl text-blue-500" /> </a>
                </div>
            </div>
            <div className="md:w-1/4 bg-white shadow-md rounded-md flex flex-col items-center py-5">
                <img src="https://i.ibb.co.com/D0L4hKj/user.png" alt="User" className='rounded-full h-32 w-32 mb-2' />
                <h2 className='font-bold'> Arif Hasan </h2>
                <span className='text-sm text-gray-600'> Support Team, Stock Room </span>
                <div className="mt-5 flex gap-1">
                    <a href="#"> <FaSquareFacebook className="text-3xl text-blue-500" /> </a>
                    <a href="#"> <FaSquareXTwitter className="text-3xl text-black" /> </a>
                    <a href="#"> <FaWhatsappSquare className="text-3xl text-green-500" /> </a>
                    <a href="#"> <FaLinkedin className="text-3xl text-blue-500" /> </a>
                </div>
            </div>
        </div>
        <div className="text-center mt-5">
            <Link to='/login' className="btn btn-wide btn-primary"> Get Started </Link>
        </div>
        
    </div>
  )
}
