import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="relative flex items-center justify-center py-7 px-10 md:px-20">
        {/* Logo (left-aligned) */}
        <h1 className="absolute left-6 md:left-20 text-2xl font-bold text-[#755541]">
          Dear Ones 🍪
        </h1>
        
        {/* Desktop Menu (centered) */}
        <ul className="hidden md:flex gap-10 text-[#755541] bg-[#9164493c] py-3 px-10 rounded-3xl ">
          <a href="#home">
            <li className="hover:cursor-pointer hover:text-[#4a3426]">Home</li>
          </a>
          <a href="#about">
            <li className="hover:cursor-pointer hover:text-[#4a3426]">About</li>
          </a>
          <a href="#flavors">
            <li className="hover:cursor-pointer hover:text-[#4a3426]">Flavors</li>
          </a>
          <a href="#contact">
            <li className="hover:cursor-pointer hover:text-[#4a3426]">Contact</li>
          </a>
        </ul>

        {/* Mobile Menu Button (right-aligned) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-6 md:hidden text-[#755541] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF9F5] shadow-md rounded-b-3xl mx-6 mt-2">
          <ul className="flex flex-col items-center gap-6 py-6 text-[#755541] font-serif">
            <a href="#home" onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#4a3426]">Home</li>
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#4a3426]">About</li>
            </a>
            <a href="#flavors" onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#4a3426]">Flavors</li>
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#4a3426]">Contact</li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
