import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function RoomDetails() {
    const room = useLoaderData();
    const {photo, room_name, description, price} = room;
    console.log(room)
  return (
    <div className='container w-11/12 mx-auto py-10'>
        <h1 className="text-center text-2xl font-bold md:text-5xl mb-5">
            {room_name}
          </h1>
    </div>
  )
}
