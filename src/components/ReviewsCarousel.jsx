import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import toast from "react-hot-toast";

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://jnoyon-ph-a11-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        const sortedReviews = data
          .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by latest first
        setReviews(sortedReviews);
      })
      .catch((err) => {
        console.error("Failed to load reviews:", err);
        toast.error("Failed to load reviews.");
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-yellow-50 to-pink-100 py-10">
      <h1 className="text-center text-2xl font-bold md:text-5xl mb-5 ">
        <span className="text-blue-500">Our</span> Reviews
      </h1>

      <div className="container mx-auto w-11/12 ">
        {reviews.length > 0 ? (
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={5000}
            showArrows={true}
            showStatus={false}
          >
            {reviews.map((review) => (
              <div key={review._id} className="p-5 bg-white rounded-md shadow-md">
                <div className="flex flex-col gap-4 mb-3">
                  <img
                    src={review.photo || "https://i.ibb.co.com/D0L4hKj/user.png"}
                    alt={review.name}
                    className="w-10 h-12 mx-auto rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="text-sm text-gray-500">{new Date(review.date).toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.reviewText}"</p>
                <p className="mt-2 text-yellow-500 mb-5"> ⭐ {review.rating} / 5</p>
              </div>
            ))}
          </Carousel>
        ) : (
          <p className="text-center text-gray-500">No reviews available yet.</p>
        )}
      </div>
    </div>
  );
}
