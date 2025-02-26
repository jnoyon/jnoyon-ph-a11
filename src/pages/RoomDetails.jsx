import React, { useContext, useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import AuthContext from '../assets/context/AuthContext';
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { Rating } from 'react-simple-star-rating';

export default function RoomDetails() {
    const room = useLoaderData();
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const {_id, photo, room_name, description, price, availability, rating} = room;
    const [startDate, setStartDate] = useState(new Date());
    const successful = () => toast.success('Room Booking Successful!');
    const unsuccessful = (msg) => toast.error(msg);
    const navigate = useNavigate('/');
    const handleBookNow = () => {
      if (!user) {
        navigate("/login");
    } else {
        document.getElementById('book_now').showModal();
    }
    }
    const handleClose = () => {
        document.getElementById('book_now').close();
    }

    useEffect(() => {
      if (room && room._id) {
        fetch(`http://jnoyon-ph-a11-server.vercel.app/reviews?roomId=${room._id}`)
          .then((res) => res.json())
          .then((data) => {
            setReviews(data); 
          })
          .catch((err) => console.error('Failed to load reviews:', err));
      }
  }, [room]);
  
  

    const handleConfirm = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const date = startDate.toISOString().split('T')[0];
   
       const bookedRoom =  { room_name, photo, price, name, email, date, rating}
       fetch("https://jnoyon-ph-a11-server.vercel.app/room-bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookedRoom),
      })
        .then((res) => res.json())
        .then((data) => {
            return fetch(`https://jnoyon-ph-a11-server.vercel.app/rooms/${_id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ availability: false }),
          });
        })
        .then((res) => res.json())
        .then((updateResult) => {
          console.log("Room availability updated:", updateResult);
          successful(); 
          document.getElementById("book_now").close();
        })
        .catch((error) => {
          console.error("Error during booking or updating room:", error);
          unsuccessful(error.message); 
          document.getElementById("book_now").close();
        });


    }
    const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
    : 0;
  return (
    <div className='container w-11/12 mx-auto py-10'>
        <Helmet>
            <title> {room_name} - Stock Room </title>
        </Helmet>
        <Toaster />
        <div className="flex flex-col md:flex-row gap-5 bg-gradient-to-r from-indigo-100 via-yellow-50 to-pink-100 p-5 rounded-md">
            <img src={photo} alt="Room" className='md:w-1/2 rounded-md' />
            <div className="info md:w-1/2">
                <h1 className=" text-2xl font-bold md:text-5xl mb-2"> {room_name}  </h1>
                <div className="rating flex gap-2 items-center mb-5">
                  {reviews.length > 0 ? (
                    <p className="flex items-center gap-2"><b> Rating:</b> <Rating initialValue={averageRating} readonly />  </p>
                  ) : (
                    <p>No reviews posted.</p>
                  )}
                </div>
                <p className='text-xl'> {description} </p>
                <div className="bg-white w-60 mx-auto text-center my-5 rounded-md p-3 shadow-md flex flex-col gap-2">
                    <h1> Price </h1>
                    <h1 className='text-3xl md:text-5xl font-bold'> ${price} </h1>
                    <p> Weekly </p>
                </div>
                <div className='text-center'>
                    {availability? <button className='button-lg bg-blue-500' onClick={handleBookNow}> Book Now </button> : <button disabled className='button-lg bg-red-500'> Unavailable </button>}
                </div>
            </div>
        </div>        
        <dialog id="book_now" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg"> {room_name}</h3>
            <p className="py-4"> {description} </p>
            <p> <b>Price: </b> ${price}/Weekly </p>
            <div className="modal-action flex-col gap-2">
            <form onSubmit={handleConfirm} method="dialog" className='gap-2 flex flex-col'>
                <label className="input input-bordered flex items-center gap-2">  Name
                    <input type="text" name='name' className="grow" placeholder="Your Full Name" defaultValue={user?.displayName || ''} />
                </label>
                <label className="input input-bordered flex items-center gap-2"> Email
                <input type="email" name="email" className="grow" defaultValue={user?.email || ''} placeholder="Your Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2"> Date
                <DatePicker name='date' selected={startDate} onChange={(date) => setStartDate(date)} />
                </label>
                <input type='submit' value='Confirm Book' className='btn btn-success' /> 
                
            </form>
            <button className="btn btn-error" onClick={handleClose}>Close</button>
            </div>
        </div>
        </dialog>
    </div>
  )
}
