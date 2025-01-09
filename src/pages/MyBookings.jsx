import React, { useContext, useEffect, useState } from "react";
import BookingItem from "../components/items/BookingItem";
export default function MyBookings() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    fetch("https://jnoyon-ph-a11-server.vercel.app/room-bookings")
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
        <span className="text-blue-500"> My </span> Bookings
      </h1>
      <div className="container w-11/12 mx-auto">
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : rooms && rooms.length > 0 ? (
          <div className="d">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Room</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room, index) => (
                    <BookingItem key={index} room={room}></BookingItem>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h1 className="text-xl"> No Room Found </h1>
        )}
      </div>
    </div>
  );
}
