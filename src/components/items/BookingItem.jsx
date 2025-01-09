import React, { useContext } from "react";
import AuthContext from "../../assets/context/AuthContext";

export default function BookingItem({ room }) {
    const {user} = useContext(AuthContext);
      
  const { _id, name, photo, room_name, email, price, date } = room;
  if(email !== user.email){
    return null;
  }
  return (
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
      <td><p>{date}</p> <button className="btn btn-xs">Update Date</button></td>
      <th>
        <button className="button bg-red-400">Cancel</button>
      </th>
    </tr>
  );
}
