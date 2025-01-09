import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ReactStarsRating from 'react-awesome-stars-rating';

export default function FeaturedRoomItem({room}) {
  const {_id, photo, room_name, description, price, rating, availability} = room;
  const [roomRating, setRoomRating] = useState(rating)

  const onChange = (value) => {
    console.log(`React Stars Rating value is ${value}`);
  };
  const ReactStarsExample = ({ value }) => {
  return <ReactStarsRating onChange={onChange} value={roomRating} />;
};

  return (
    <div className='flex flex-col items-center gap-2 rounded-md p-2 border'>
      <img src={photo} alt="Room" className='w-full rounded-md' />
      <div className="flex items-center gap-1 justify-between w-full">
        <h1 className='font-bold text-blue-600'> {room_name} </h1>
        <p className='text-sm text-gray-500'>  ${price}/Week  </p>
      </div>
      
      <div className="rating flex gap-2 items-center">
        <p className='bg-yellow-400 px-2 py-0.5 text-sm rounded-md'> {roomRating} </p> <ReactStarsExample />
      </div>
      <p  className='text-sm text-gray-700 mb-2'> {description} </p>
        <Link to={`/rooms/${_id}`}  className='button-lg bg-blue-600'> Book Now </Link>
        <p className='text-xs'> {availability? <span> Available </span>: <span> Not Available</span>} </p>
    </div>
  )
}
