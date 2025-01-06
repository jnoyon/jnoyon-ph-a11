import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute w-full">
            <div className="flex flex-col items-center justify-center min-h-screen">
              <div className="md:w-1/3 backdrop-blur  text-center mx-auto p-5 rounded-lg shadow-lg">
                <p className="mb-5 md:text-xl">
                Experience unmatched comfort and world-class amenities in our elegantly designed rooms.
                </p>
                <Link to="/rooms" className="bg-blue-600 text-white font-bold py-2 px-5 rounded-md hover:bg-red-500"> Rooms </Link>
              </div>
            </div>
          </div>
          <img
            src="https://tp.jihadur.com/wp-content/uploads/2025/01/slider-2.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://tp.jihadur.com/wp-content/uploads/2025/01/slider1.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
