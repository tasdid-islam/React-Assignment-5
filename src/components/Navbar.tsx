import { useState } from "react";
import logo from "../assets/logo-text.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-[1px] border-gray-200 bg-white">

      
      <div className="grid grid-cols-3 items-center px-4 py-4 md:hidden">

        <div className="justify-self-start">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        
        <div className="justify-self-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        
        <div className="flex items-center gap-1 justify-self-end">
          <button className="px-2 py-1 text-xs font-medium text-gray-700">
            Sign In
          </button>

          <button className="rounded-[30px] bg-[#DB2777] px-3 py-1.5 text-xs font-medium text-white">
            Sign Up
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={
                    item === "Home"
                      ? "font-medium text-[#DB2777]"
                      : "font-medium text-gray-700"
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    
      <div className="mx-auto hidden  items-center justify-between px-6 py-5 md:flex lg:px-20">

        
        <img src={logo} alt="Logo" className="h-10 w-auto" />

        
        <ul className="flex items-center gap-[29px]">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={
                  item === "Home"
                    ? "text-[#DB2777]"
                    : "text-gray-700 transition hover:text-[#D91B7E]"
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        
        <div className="flex items-center gap-4">
          <button className="rounded-[30px] px-6 py-2 font-medium text-gray-700 transition hover:bg-gray-200">
            Sign In
          </button>

          <button className="rounded-[30px] bg-[#DB2777] px-6 py-2 font-medium text-white transition hover:bg-[#c51e69]">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;