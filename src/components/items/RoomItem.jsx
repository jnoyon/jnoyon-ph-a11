import React from 'react'
import { Link } from 'react-router-dom';
import ReactStarsRating from 'react-awesome-stars-rating';

export default function RoomItem({room}) {
    const {_id, photo, room_name, description, price, rating, availability} = room;
    const ReactStarsExample = () => {
      return <ReactStarsRating value={rating} />;
    };
    return (
        <Link to={`/rooms/${_id}`}>
          <div className='flex gap-2 rounded-md p-2 border'>
          <img src={photo} alt="Room" className='w-52 rounded-md' />
          <div className="info">
            <div className="flex items-center gap-1">
            <h1 className='font-bold text-xl'> {room_name} </h1> <p className='text-xs'> {availability? <span className='bg-green-300 py-0.5 rounded-md px-2'> Available </span>: <span className='bg-red-300 py-0.5 rounded-md px-2'> Not Available</span>} </p>
            </div>
            <p> <b>Price:</b> {price} /- Hour </p>
            <div className="rating flex gap-2 items-center mb-2">
              <p className='bg-yellow-400 px-2 py-0.5 text-sm rounded-md'> {rating} </p> <ReactStarsExample />
            </div>
            <p  className='text-sm text-gray-700 mb-2'> {description} </p>
          </div>
        </div>
        </Link>
      )
}
