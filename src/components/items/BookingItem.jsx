import React, { useContext, useState } from "react";
import AuthContext from "../../assets/context/AuthContext";
import swal from 'sweetalert';
export default function BookingItem({ room, setRooms }) {
    const {user} = useContext(AuthContext);
    
    const { _id, name, photo, room_name, email, price, date } = room;
    const [bookdate, setBookdate] = useState(date);
  const handleCancel = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover Action!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://jnoyon-ph-a11-server.vercel.app/room-bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            
            if (data.deletedCount > 0) {
              swal("Room has been Cancelled!", {
                icon: "success",
              });
              setRooms((prevRoom) => prevRoom.filter((room) => room._id !== _id))
            } else {
              swal("Room can not be Cancelled!", {
                icon: "error",
              });
            }
          })
          .catch((error) => {
            swal("Room can not be Cancelled!", {
              icon: "error",
            });
            console.log("ERROR", error);
          });
      } else {
        swal("You did not cancel the booking.");
      }
    });
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); 
    const bookdate = formData.get("bookdate");
  
    const date = new Date(bookdate).toISOString().split('T')[0]; 
  
    fetch(`http://jnoyon-ph-a11-server.vercel.app/room-bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: date }), // Send the formatted date
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // Log the response
        if (data.modifiedCount > 0) {
          swal("Booking date updated successfully!", {
            icon: "success",
          });
          setRooms((prevRooms) =>
            prevRooms.map((room) =>
              room._id === _id ? { ...room, date: bookdate } : room
            )
          );
        } else {
          swal("Failed to update booking date!", {
            icon: "error",
          });
        }
      })
      .catch((error) => {
        swal("An error occurred while updating the booking date!", {
          icon: "error",
        });
        console.error("Update Error:", error);
      });
  };
  const handleDateChange = (e) => {
    setBookdate(e.target.value); 
  };

  if(!user || email !== user.email){
    return null;
  }
  return (
    <>
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photo} alt={room_name} />
            </div>
          </div>
          <div>
            <div className="font-bold"> {room_name} </div>
            <div className="text-sm opacity-50"> Price: ${price} </div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">
        {email}
        </span>
      </td>
      <td>
        <form onSubmit={handleUpdate} className="flex gap-2">
          <input type="date" name="bookdate" className="input-sm input input-bordered"  defaultValue={date} onChange={handleDateChange} /> 
          <input type="Submit" value="Update" className="btn btn-sm btn-primary" />
        </form>
      </td>
      <th>
        <button className="button bg-red-400" onClick={()=>handleCancel(_id)}>Cancel</button>
      </th>
    </tr>
    </>
  );
}
