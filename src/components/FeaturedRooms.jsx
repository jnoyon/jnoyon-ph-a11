import React, { useEffect, useState } from "react";
import FeaturedRoomItem from "./items/FeaturedRoomItem";

export default function FeaturedRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/rooms")
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
        <span className="text-blue-500"> Latest </span> Rooms
      </h1>
      <div className="container w-11/12 mx-auto">
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : rooms && rooms.length>0? (
          <div className="grid md:grid-cols-3 gap-5">
            {rooms.map((room, index) => (
              <FeaturedRoomItem key={index} room={room}></FeaturedRoomItem>
            ))}
          </div>
        ): ( <h1 className="text-xl"> No Room Found </h1>)
        }
      </div>
    </div>
  );
}
