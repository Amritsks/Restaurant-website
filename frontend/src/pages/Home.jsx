import firstImg from "../assets/bg.jpg";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div style={{ backgroundImage: `url(${firstImg})` }} className="bg-cover bg-center h-screen w-full pt-[70px]" >

      {/* Hero section */}
      <div className="flex flex-col justify-center items-center text-center h-[80vh] text-white bg-black/50">
        <h1 className="text-5xl font-bold mb-4">🍴 Amrit's Restaurant</h1>
        <p className="text-xl mb-6">Fresh, Flavorful & Made with Love ❤️</p>
        <div className="flex gap-4">
          <Link to="/menu">
            <button className="bg-[#0992e2] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              View Menu
            </button>
          </Link>
          <Link to="/orders">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
