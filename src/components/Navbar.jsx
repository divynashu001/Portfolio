import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-r from-fuchsia-800 to-violet-500 w-full z-50 h-18 flex items-center fixed top-0 px-10 shadow-md shadow-blue-500">
      <div className="text-4xl font-bold text-white">Portfolio</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex ml-auto gap-6 text-xl font-semibold">
        {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="cursor-pointer px-4 py-2 border border-transparent hover:scale-105 hover:bg-gray-950/50 hover:text-fuchsia-300 rounded-2xl transition-all duration-300 text-white"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="ml-auto md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <FiX size={26} className="text-white" /> : <FiMenu size={26} className="text-white" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-full bg-gray-900 text-white p-6 flex flex-col gap-4 items-center md:hidden">
          {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="w-full text-center py-2 text-xl font-semibold hover:text-fuchsia-400 transition"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
