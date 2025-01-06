import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";
export default function PricingTable() {
  return (
    <div className='py-10'>
        <h1 className='text-center text-2xl font-bold md:text-5xl mb-5'> Our Pricing </h1>
        <div className="flex flex-col md:flex-row gap-7  container mx-auto w-11/12">

            <div className="flex flex-col md:w-1/3 shadow-lg rounded-md">
                <div className="header bg-green-500 text-white p-2 relative">
                    <h1 className='text-3xl font-bold'> Basic </h1>
                    <h3 className='text-gray-100'> 1000/- Day </h3>
                </div>
                <ul className='p-3'>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex items-center gap-2'> <FaArrowAltCircleRight className='text-green-500' /> <b> Room Type: </b> Standard room </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex items-center gap-2'> <FaArrowAltCircleRight className='text-green-500' />  <b> Breakfast: </b> Included for one person. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-green-500' />  <b> Wi-Fi: </b> Free, limited to 2 devices. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-green-500' />  <b> Check-in/out </b> Standard (2 PM / 11 AM). </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-green-500' />  <b> Room Cleaning: </b> Once every two days. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-green-500' />  <b> TV Channels: </b> Limited cable channels. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-green-500' />  <b> Parking </b> Paid parking available. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-green-500' />  <b>Customer Support: </b> Email support only. </li>
                    <li className='py-1 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-green-500' />  <b> Loyalty Points: </b> 5 points per booking. </li>
                </ul>
                <Link to='' className='bg-green-500 font-bold text-white text-center py-2'> View More </Link>
            </div>
            <div className="flex flex-col md:w-1/3 shadow-lg rounded-md">
                <div className="header bg-orange-500 text-white p-2 relative">
                    <span className='bg-red-700 absolute px-2 py-0.5 top-0 right-0 text-sm flex gap-1 items-center animate-bounce'> <FaHotjar /> <span>Popular</span> </span>
                    <h1 className='text-3xl font-bold'> Premium </h1>
                    <h3 className='text-gray-100'> 1500/- Day </h3>
                </div>
                <ul className='p-3'>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex items-center gap-2'> <FaArrowAltCircleRight className='text-orange-500' /> <b> Room Type: </b> Deluxe room </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex items-center gap-2'> <FaArrowAltCircleRight className='text-orange-500' />  <b> Breakfast: </b> Included for two people. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-orange-500' />  <b> Wi-Fi: </b> Free, limited to 2 devices. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-orange-500' />  <b> Check-in/out </b> Standard (2 PM / 11 AM). </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-orange-500' />  <b> Room Cleaning: </b> Once every two days. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-orange-500' />  <b> TV Channels: </b> Limited cable channels. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-orange-500' />  <b> Parking </b> Complimentary </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-orange-500' />  <b>Customer Support: </b> Email support only. </li>
                    <li className='py-1 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-orange-500' />  <b> Loyalty Points: </b> 10 points per booking. </li>
                </ul>
                <Link to='' className='bg-orange-500 font-bold text-white text-center py-2'> View More </Link>
            </div>
            <div className="flex flex-col md:w-1/3 shadow-lg rounded-md">
                <div className="header bg-blue-500 text-white p-2 relative">
                    <h1 className='text-3xl font-bold'> Luxury </h1>
                    <h3 className='text-gray-100'> 2000/- Day </h3>
                </div>
                <ul className='p-3'>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex items-center gap-2'> <FaArrowAltCircleRight className='text-blue-500' /> <b> Room Type: </b> Suite with private balcony </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex items-center gap-2'> <FaArrowAltCircleRight className='text-blue-500' />  <b> Breakfast: </b>  Up to four people. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-blue-500' />  <b> Wi-Fi: </b> Free, high-speed for unlimited devices. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-blue-500' />  <b> Check-in/out </b> Flexible timings (on request). </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-blue-500' />  <b> Room Cleaning: </b> Twice-daily cleaning. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-blue-500' />  <b> TV Channels: </b> Premium channels </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-blue-500' />  <b> Parking </b> Paid parking available. </li>
                    <li className='border-b border-solid border-gray-300 py-1.5 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-blue-500' />  <b>Customer Support: </b> Dedicated concierge. </li>
                    <li className='py-1 flex gap-2 items-center'> <FaArrowAltCircleRight className='text-blue-500' />  <b> Loyalty Points: </b> 20 points per booking </li>
                </ul>
                <Link to='' className='bg-blue-500 font-bold text-white text-center py-2'> View More </Link>
            </div>
            
        </div>
    </div>
  )
}
