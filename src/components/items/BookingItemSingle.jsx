import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../assets/context/AuthContext";
import swal from "sweetalert";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import Rating from 'react-rating';

export default function BookingItemSingle() {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const { _id, name, photo, room_name, email, price, date} = room;
  const [bookdate, setBookdate] = useState(date);
  const navigate = useNavigate();

  const userName = user?.displayName || 'Visitor';
  const userPhoto = user?.photoURL || 'https://i.ibb.co.com/D0L4hKj/user.png';

  useEffect(() => {
    if (room?._id) {
      fetch(`https://stock-room.vercel.app/reviews?roomId=${room._id}`)
        .then((res) => res.json())
        .then((data) => {
          const filteredReviews = data.filter((review) => review.roomId === room._id);
          setReviews(filteredReviews);
        })
        .catch((err) => console.error('Failed to load reviews:', err));
    }
  }, [room._id]);
  


  

  const handleCancel = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover Action!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://stock-room.vercel.app/room-bookings/${_id}`, {
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
      fetch(`https://stock-room.vercel.app/room-bookings/${_id}`, {
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

  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = (value) => {
    setUserRating(value);
  };
  
  const ReactStarsExample = () => {
    return (
      <ReactStarsRating
        value={userRating}
        onChange={handleRatingChange}
        isEdit={true}
      />
    );
  };
  

  if (!user || email !== user.email) {
    return null;
  }


 


  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewText = e.target.reviewText.value.trim();

    if (!reviewText || rating === 0) {
      toast.error("Please write a review and select a rating.");
      return;
    }

    const newReview = {
      name: userName,
      photo: userPhoto,
      reviewText,
      rating,
      roomId: room._id,
      date: new Date().toISOString(),
    };

    fetch('https://stock-room.vercel.app/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review submitted successfully.");
          setReviews((prev) => [newReview, ...prev]);
          document.getElementById("reviewModal").close();
          e.target.reset();
          setRating(0);
        } else {
          throw new Error("Failed to post review");
        }
      })
      .catch((err) => {
        console.error('Failed to post review:', err);
        toast.error("Failed to post review.");
      });
  };

  const averageRating = reviews.length > 0
  ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
  : 0;

  
  
  return (
    <div className="container mx-auto w-11/12">
      <Helmet>
        <title> {room_name} - Stock Room </title>
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
              <button type="button" className="btn ml-2 btn-sm btn-error" onClick={() => document.getElementById("dateModal").close()}>Close</button>

            </form>
          </div>
        </div>
      </dialog>

      <dialog id="reviewModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Give a review!</h3>
          <div className="modal-action">
          <form onSubmit={handleReviewSubmit} className="flex flex-col gap-2 w-full">
              <h2 className="divider font-bold">Post Your Review</h2>

              <label className="input input-bordered flex items-center gap-2">
                <b>Name:</b>
                <input type="text" value={userName}  className="grow" />
              </label>

              <div className="chat chat-start w-full">
                <div className="chat-image avatar">
                  <div className="w-16 rounded-full">
                    <img src={userPhoto} alt="User Avatar" />
                  </div>
                </div>
                <textarea
                  className="textarea textarea-bordered w-full mb-5"
                  name="reviewText"
                  placeholder="Write your review here"
                ></textarea>
              </div>

              <div className="flex flex-col items-center">
                <p className="font-semibold">Your Rating:</p>
                <Rating
                  initialRating={rating}
                  onChange={(rate) => setRating(rate)}
                 
                />
              </div>

              <input type="submit" value="Post Review" className="btn btn-success btn-sm text-white mt-5" />
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
            {reviews.length > 0 ? (
                <p className="flex items-center gap-2"><b> Rating:</b> <Rating placeholderRating={averageRating} readonly></Rating>  </p>
              ) : (
                <p>No reviews posted.</p>
              )}

            <p>
              <b>Name:</b> {name}
            </p>
            <p>
              <b>Date:</b> {bookdate}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="button bg-green-500" onClick={() => document.getElementById("dateModal").showModal()} > Update Date </button>
            <button className="button bg-red-500" onClick={() => handleCancel(_id)} > Cancel </button>
            <button className="button bg-yellow-500" onClick={() => document.getElementById("reviewModal").showModal()} > Give Review </button>
          </div>
        </div>
      </div>
    </div>
  );
}
