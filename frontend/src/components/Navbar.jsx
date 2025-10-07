// Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-br
from-[#ea580c]
via-[#572e0c]
to-[#78350f] p-2 rounded-md opacity-85 w-full absolute top-0 left-0 z-10 ">
      {/* Left menu */}
      <ul className="flex gap-4">
        <li className="group relative text-center p-2 rounded-md cursor-pointer hover:text-blue-900">
          <Link to="/">Home</Link>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0992e2] group-hover:w-full transition-all duration-300"></div>
        </li>
        <li className="group relative text-center p-2 rounded-md cursor-pointer hover:text-blue-900">
          <Link to="/menu">Menu</Link>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0992e2] group-hover:w-full transition-all duration-300"></div>
        </li>
        <li className="group relative text-center p-2 rounded-md cursor-pointer hover:text-blue-900">
          <Link to="/about">About Us</Link>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0992e2] group-hover:w-full transition-all duration-300"></div>
        </li>
        <li className="group relative text-center p-2 rounded-md cursor-pointer hover:text-blue-900">
          <Link to="/suggestion">Suggestion</Link>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0992e2] group-hover:w-full transition-all duration-300"></div>
        </li>
      </ul>

      {/* Right menu */}
      <div>
        <ul className="flex gap-4">
          <li className="group relative text-center p-2 rounded-md cursor-pointer hover:text-blue-700">
            <Link to="/orders">Orders</Link>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0992e2] group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="group relative text-center p-2 rounded-md cursor-pointer hover:text-blue-700">
            <Link to="/login">Log out</Link>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0992e2] group-hover:w-full transition-all duration-300"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
