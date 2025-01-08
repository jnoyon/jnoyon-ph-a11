import React from 'react'
import { Link } from 'react-router-dom';

export default function FeaturedRoomItem({room}) {
  const {_id, photo, room_name, description, price} = room;


  return (
    <div className='flex flex-col items-center gap-2 rounded-md p-2 border'>
      <img src={photo} alt="Room" className='w-full rounded-md' />
      <div className="flex items-center gap-1 justify-between w-full">
        <h1 className='font-bold text-blue-600'> {room_name} </h1>
        <p className='text-sm text-gray-500'>  ${price}/Week  </p>
      </div>
      <p  className='text-sm text-gray-700 mb-2'> {description} </p>
        <Link to={`/rooms/${_id}`}  className='button-lg bg-blue-600'> Book Now </Link>
    </div>
  )
}
