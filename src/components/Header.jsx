import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white-800 p-3 ">
        <div className="container mx-auto flex justify-between items-center ">
          {/* Logo and Navbar links (visible on medium and larger screens) */}
          <div className="flex items-center justify-center container mx-auto px-4">
            {/* Logo */}
            <a href="#" className="text-black-300 text-xl font-bold mr-4">
              Bandage
            </a>

            {/* Navbar links */}
            <div className="hidden lg:flex space-x-4 ps-[100px] ">
              <a
                href="#"
                className="text-black font-semibold hover:text-blue-500"
              >
                <p className="hover:text-blue-700">Home</p>
              </a>
              <select className="block appearance-none w-full border-none  className='hover:text-blue-700' p-0 font-semibold w-20 leading-tight focus:outline-none">
                <option>Shop</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
              <a href="#" className=" font-semibold hover:text-blue-500">
                <p className="hover:text-blue-700">About</p>
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-blue-500"
              >
                <p className="hover:text-blue-700">Blog</p>
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-blue-500"
              >
                <p className="hover:text-blue-700">Contact</p>
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-blue-500"
              >
                <p className="hover:text-blue-700">Pages</p>
              </a>
            </div>

            <div className=" space-x-4 flex ms-[100px] text-blue-50">
              <a
                href="#"
                className="text-blue-400 hover:text-gray-300 flex"
                id="loginRegisterLink"
              >
                <svg
                  width="22px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="#23A6F0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                      stroke="#23A6F0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <span class="hidden sm:inline pt-1 ">Login/Register</span>
              </a>

              <a href="#" className="text-white hover:text-gray-300 flex">
                <svg
                  width="20px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                      stroke="#23A6F0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="text-blue-400">1</p>
              </a>

              <a href="#" className="text-white hover:text-gray-300 flex">
                <svg
                  width="20px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                      stroke="#23A6F0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="text-blue-400">1</p>
              </a>
            </div>
          </div>

          {/* Mobile menu button (visible on mobile) */}
          <div className="lg:hidden">
            <button
              className="text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* Hamburger icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (visible on mobile when toggled) */}
        {isMobileMenuOpen && (
          <div className="md:hidden text-center">
            <a href="#" className="block text-black  p-2">
              Home
            </a>
            <a href="#" className="block text-black p-2">
              Shop
            </a>
            <a href="#" className="block text-black p-2">
              About
            </a>
            <a href="#" className="block text-black p-2">
              Blog
            </a>
            <a href="#" className="block text-black p-2">
              Contact
            </a>
            <a href="#" className="block text-black p-2">
              Pages
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
