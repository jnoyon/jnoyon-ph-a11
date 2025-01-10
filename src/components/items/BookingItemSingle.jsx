import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../assets/context/AuthContext";
import swal from "sweetalert";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactStarsRating from "react-awesome-stars-rating";

export default function BookingItemSingle() {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);

  const { _id, name, photo, room_name, email, price, date, rating } = room;
  const [bookdate, setBookdate] = useState(date);
  const navigate = useNavigate();

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

              navigate("/my-bookings");
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
    const newDate = e.target.datechange.value;
    if (newDate !== bookdate) {
      const formattedDate = new Date(newDate).toISOString().split("T")[0];
      fetch(`http://jnoyon-ph-a11-server.vercel.app/room-bookings/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: formattedDate }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            swal("Booking Date Updated!", {
              icon: "success",
            });
            setBookdate(formattedDate);
            document.getElementById("dateModal").close();
          } else {
            swal("Failed to Update Date!", {
              icon: "error",
            });
          }
        })
        .catch((error) => {
          swal("Failed to Update Date!", {
            icon: "error",
          });
          console.log("ERROR", error);
        });
    } else {
      swal("No Change in Date", {
        icon: "info",
      });
    }
  };

  const ReactStarsExample = () => {
    return <ReactStarsRating value={rating} />;
  };

  if (!user || email !== user.email) {
    return null;
  }
  return (
    <div className="container mx-auto w-11/12">
      <Helmet>
        <title> {room_name} </title>
      </Helmet>

      <dialog id="dateModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Current Date: {date}</h3>
          <div className="modal-action">
            <form onSubmit={handleUpdate} method="dialog">
              <input
                type="date"
                placeholder="Type here"
                name="datechange"
                className="input input-bordered w-full mb-2"
              />
              <input
                type="submit"
                value="Update Date"
                className="btn btn-sm btn-success"
              />
              <button className="btn ml-2 btn-sm btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="flex flex-col md:flex-row gap-5 rounded-md p-2 border py-5 my-5">
        <img src={photo} alt="Room" className="md:w-96 w-full rounded-md" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl text-gray-600"> {room_name} </h1>
            <p className="text-sm text-gray-500">
              <b>Price:</b> {price}/- Hour
            </p>
            <div className="rating flex gap-2 items-center">
              <p className="bg-yellow-400 px-2 py-0.5 text-sm rounded-md">
                {rating}
              </p>
              <ReactStarsExample />
            </div>
            <p>
              {" "}
              <b>Name:</b> {name}{" "}
            </p>
            <p>
              {" "}
              <b>Date:</b> {bookdate}{" "}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className="button bg-green-500"
              onClick={() => document.getElementById("dateModal").showModal()}
            >
              Update Date
            </button>
            <button
              className="button bg-red-500"
              onClick={() => handleCancel(_id)}
            >
              {" "}
              Cancel{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
