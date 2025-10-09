import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // modern icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-gradient-to-br from-[#ea580c] via-[#572e0c] to-[#78350f] p-3 rounded-md opacity-90 w-full fixed top-0 left-0 z-20 shadow-md">
      {/* Logo / Brand */}
      <div className="text-white font-bold text-xl tracking-wide">
        <Link to="/">CampusTreat</Link>
      </div>

      {/* Hamburger button (mobile only) */}
      <button
        className="text-white md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu for large screens */}
      <ul className="hidden md:flex gap-6 text-white">
        {[
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
          { name: "About Us", path: "/about" },
          { name: "Suggestion", path: "/suggestion" },
        ].map((item) => (
          <li
            key={item.name}
            className="group relative text-center p-2 rounded-md cursor-pointer hover:text-blue-300 transition"
          >
            <Link to={item.path}>{item.name}</Link>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0992e2] group-hover:w-full transition-all duration-300"></div>
          </li>
        ))}
      </ul>

      {/* Right menu (desktop only) */}
      <ul className="hidden md:flex gap-6 text-white">
        <li className="group relative text-center p-2 rounded-md cursor-pointer hover:text-blue-300 transition">
          <Link to="/orders">Orders</Link>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0992e2] group-hover:w-full transition-all duration-300"></div>
        </li>
      </ul>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-[#78350f] text-white flex flex-col items-center md:hidden rounded-b-md shadow-lg py-3 space-y-2">
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "About Us", path: "/about" },
            { name: "Suggestion", path: "/suggestion" },
            { name: "Orders", path: "/orders" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 hover:bg-[#572e0c] rounded transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
