import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import AuthContext from '../assets/context/AuthContext';
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function RoomDetails() {
    const room = useLoaderData();
    const {user} = useContext(AuthContext);
    const {photo, room_name, description, price} = room;
    const [startDate, setStartDate] = useState(new Date());
    const handleBookNow = () => {
        
        document.getElementById('book_now').showModal()
    }
    const handleConfirm = () => {

    }
  return (
    <div className='container w-11/12 mx-auto py-10'>
        
        <div className="flex flex-col md:flex-row gap-5 bg-gradient-to-r from-indigo-100 via-yellow-50 to-pink-100 p-5 rounded-md">
            <img src={photo} alt="Room" className='md:w-1/2 rounded-md' />
            <div className="info md:w-1/2">
                <h1 className=" text-2xl font-bold md:text-5xl mb-5"> {room_name}  </h1>
                <p className='text-xl'> {description} </p>
                <div className="bg-white w-60 mx-auto text-center my-5 rounded-md p-3 shadow-md flex flex-col gap-2">
                    <h1> Price </h1>
                    <h1 className='text-3xl md:text-5xl font-bold'> ${price} </h1>
                    <p> Weekly </p>
                </div>
                <div className='text-center'>
                    <button className='button-lg bg-blue-500' onClick={handleBookNow}> Book Now </button>
                </div>
            </div>
        </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
        
        <dialog id="book_now" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg"> {room_name}</h3>
            <p className="py-4"> {description} </p>
            <p> <b>Price: </b> ${price}/Weekly </p>
            <div className="modal-action flex-col gap-2">
            <form onSubmit={handleConfirm} method="dialog" className='gap-2 flex flex-col'>
                <label className="input input-bordered flex items-center gap-2">  Name
                    <input type="text" name='name' className="grow" placeholder="Your Full Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2"> Email
                <input type="email" name="email" className="grow" defaultValue={user?.email || ''} placeholder="Your Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2"> Date
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </label>
                <button className='btn btn-success'> Confirm Book </button>
                <button className="btn btn-error">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}
