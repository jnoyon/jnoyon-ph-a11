import React from 'react'
import { Link } from 'react-router-dom';

export default function RoomItem({room}) {
    const {photo, room_name, description, price} = room;
    return (
        <Link>
          <div className='flex gap-2 rounded-md p-2 border'>
          <img src={photo} alt="Room" className='w-52 rounded-md' />
          <div className="info">
            <h1 className='font-bold text-xl'> {room_name} </h1>
            <p> <b>Price:</b> ${price} / Week </p>
            <p  className='text-sm text-gray-700 mb-2'> {description} </p>
          </div>
        </div>
        </Link>
      )
}
