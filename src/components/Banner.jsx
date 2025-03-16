import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute inset-0 w-full bg-black bg-opacity-70 ">
            <div className="flex flex-col items-center ">
              <div className="md:w-1/2 w-10/12 text-center absolute md:top-1/3 top-1/4">
                <div className="mb-10 text-white flex flex-col md:gap-2">
                  <p className="md:text-4xl"> Experience unmatched </p>
                  <h1 className="md:text-6xl font-bold text-blue-400">  World-class amenities  </h1>
                  <p className="md:text-4xl"> In our elegantly designed rooms. </p>
                </div>
                <Link to="/rooms" className="bg-blue-600 text-white text-sm md:text-xl font-bold py-2 md:py-3 md:px-10 px-5 rounded-md hover:bg-red-500"> Rooms </Link>
              </div>
            </div>
          </div>
          <img
            src="https://i.ibb.co.com/Nd0cWzCS/room-min.jpg"
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
        <div className="absolute inset-0 w-full bg-black bg-opacity-70 ">
            <div className="flex flex-col items-center ">
              <div className="md:w-1/2 w-10/12 text-center absolute md:top-1/3 top-1/4">
                <div className="mb-10 text-white flex flex-col md:gap-2">
                  <p className="md:text-4xl"> Experience unmatched </p>
                  <h1 className="md:text-5xl font-bold text-red-400">  World-class amenities  </h1>
                  <p className="md:text-4xl"> In our elegantly designed rooms. </p>
                </div>
                <Link to="/rooms" className="bg-red-600 text-white text-sm md:text-xl font-bold py-2 md:py-3 md:px-10 px-5 rounded-md hover:bg-blue-500"> Rooms </Link>
              </div>
            </div>
          </div>
          <img
            src="https://i.ibb.co.com/Nd0cWzCS/room-min.jpg"
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
