import firstImg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${firstImg})` }}
      className="bg-cover bg-center h-screen w-full pt-[70px] flex flex-col"
    >
      {/* Hero section */}
      <div className="flex flex-col justify-center items-center text-center flex-grow text-white bg-black/50 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          🍴 Amrit&apos;s Restaurant
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-[90%] sm:max-w-[70%] lg:max-w-[50%]">
          Fresh, Flavorful & Made with Love ❤️
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link to="/menu" className="w-full sm:w-auto">
            <button className="bg-[#0992e2] text-white w-full sm:w-auto px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition">
              View Menu
            </button>
          </Link>
          <Link to="/orders" className="w-full sm:w-auto">
            <button className="bg-yellow-400 text-black w-full sm:w-auto px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-yellow-500 transition">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
