import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export default function RoomItem({ room }) {
    const { _id, photo, room_name, description, price, rating, availability } = room;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      if (room && room._id) {
          fetch(`http://jnoyon-ph-a11-server.vercel.app/reviews?roomId=${room._id}`)
              .then((res) => res.json())
              .then((data) => {
                  setReviews(data);
              })
              .catch((err) => console.error('Failed to load reviews:', err));
      }
  }, [room._id]);
  

    const averageRating = reviews.length > 0
        ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
        : 0;

    return (
        <Link to={`/rooms/${_id}`}>
            <div className='flex gap-2 rounded-md p-2 border'>
                <img src={photo} alt="Room" className='w-52 rounded-md' />
                <div className="info">
                    <div className="flex items-center gap-1">
                        <h1 className='font-bold text-xl'>{room_name}</h1>
                        <p className='text-xs'>
                            {availability ? (
                                <span className='bg-green-300 py-0.5 rounded-md px-2'>Available</span>
                            ) : (
                                <span className='bg-red-300 py-0.5 rounded-md px-2'>Not Available</span>
                            )}
                        </p>
                    </div>
                    <p><b>Price:</b> {price} /- Hour</p>
                   
                    <p className='text-sm text-gray-700 mb-2'>{description}</p>
                </div>
            </div>
        </Link>
    );
}
