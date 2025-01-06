import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
export default function PricingTable() {
  return (
    <div className='py-10'>
        <h1 className='text-center text-2xl font-bold md:text-5xl mg-5 md:mb-10'> Our Pricing </h1>
        <div className="flex flex-col md:flex-row gap-7  container mx-auto w-11/12">
            <div className="flex flex-col md:w-1/3 shadow-lg rounded-md">
                <div className="header bg-green-500 text-white p-2 relative">
                    <span className='bg-red-400 block absolute px-2 py-0.5 top-0 right-0 text-sm'> Popular </span>
                    <h1 className='text-3xl font-bold'> Starter </h1>
                    <h3> 2000/- Day </h3>
                </div>
                <ul className='p-3'>
                    <li className='border-b border-solid border-gray-300 py-1 flex items-center gap-5'> <b> Air Condition: </b> <FaTimes className='text-red-400 text' /> </li>
                    <li className='border-b border-solid border-gray-300 py-1 flex items-center gap-5'> <b> Air Condition: </b> <IoCheckmarkDoneCircle className='text-green-400 text' /> </li>
                    <li className='border-b border-solid border-gray-300 py-1'> <b> Air Condition: </b> Yes </li>
                    <li className='py-1'> <b> Air Condition: </b> Yes </li>
                </ul>
                <Link to='' className='bg-green-500 font-bold text-white text-center py-1'> View More </Link>
            </div>
            <div className="flex flex-col md:w-1/3 shadow-lg rounded-md">
                <div className="header bg-green-500 text-white p-2 relative">
                    <span className='bg-red-400 block absolute px-2 py-0.5 top-0 right-0 text-sm'> Popular </span>
                    <h1 className='text-3xl font-bold'> Starter </h1>
                    <h3> 2000/- Day </h3>
                </div>
                <ul className='p-3'>
                    <li className='border-b border-solid border-gray-300 py-1 flex items-center gap-5'> <b> Air Condition: </b> <FaTimes className='text-red-400 text' /> </li>
                    <li className='border-b border-solid border-gray-300 py-1 flex items-center gap-5'> <b> Air Condition: </b> <IoCheckmarkDoneCircle className='text-green-400 text' /> </li>
                    <li className='border-b border-solid border-gray-300 py-1'> <b> Air Condition: </b> Yes </li>
                    <li className='py-1'> <b> Air Condition: </b> Yes </li>
                </ul>
                <Link to='' className='bg-green-500 font-bold text-white text-center py-1'> View More </Link>
            </div>
            <div className="flex flex-col md:w-1/3 shadow-lg rounded-md">
                <div className="header bg-green-500 text-white p-2 relative">
                    <span className='bg-red-400 block absolute px-2 py-0.5 top-0 right-0 text-sm'> Popular </span>
                    <h1 className='text-3xl font-bold'> Starter </h1>
                    <h3> 2000/- Day </h3>
                </div>
                <ul className='p-3'>
                    <li className='border-b border-solid border-gray-300 py-1 flex items-center gap-5'> <b> Air Condition: </b> <FaTimes className='text-red-400 text' /> </li>
                    <li className='border-b border-solid border-gray-300 py-1 flex items-center gap-5'> <b> Air Condition: </b> <IoCheckmarkDoneCircle className='text-green-400 text' /> </li>
                    <li className='border-b border-solid border-gray-300 py-1'> <b> Air Condition: </b> Yes </li>
                    <li className='py-1'> <b> Air Condition: </b> Yes </li>
                </ul>
                <Link to='' className='bg-green-500 font-bold text-white text-center py-1'> View More </Link>
            </div>
        </div>
    </div>
  )
}
