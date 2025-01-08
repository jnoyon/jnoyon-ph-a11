import React, { useEffect, useState } from "react";
import RoomItem from "../components/items/RoomItem";
export default function Rooms() {
  const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://jnoyon-ph-a11-server.vercel.app/rooms")
        .then((res) => res.json())
        .then((data) => {
          setRooms(data);
          setLoading(false);
        })
  
        .catch((error) => {
          console.log(error);
        });
    }, []);


  return (
    <div className="py-10">
          <h1 className="text-center text-2xl font-bold md:text-5xl mb-5">
            <span className="text-blue-500"> All </span> Rooms
          </h1>
          <div className="container w-11/12 mx-auto">
            {loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : rooms && rooms.length>0? (
              <div className="grid md:grid-cols-2 gap-5">
                {rooms.map((room, index) => (
                  <RoomItem key={index} room={room}></RoomItem>
                ))}
              </div>
            ): ( <h1 className="text-xl"> No Room Found </h1>)
            }
          </div>
        </div>
  )
}
