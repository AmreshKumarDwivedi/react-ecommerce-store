import React, { useState, useContext, useEffect } from "react";
import { FaUser, FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

   
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  

  return (
    <>
      <nav className="bg-[rgb(254,253,247)] shadow-md w-screen relative z-40">
      
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <form className="hidden sm:block w-72">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search..."
                className="block w-full pl-10 pr-16 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-400 focus:border-gray-400 outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-800"
              >
                Go
              </button>
            </div>
          </form>

        
          <div className="flex justify-center">
            <Link to="/">
            <img
              src="https://deyga.in/cdn/shop/files/Deyga_Logo_2.png?v=1752751315&width=180"
              alt="Logo"
              className="h-12 w-auto object-contain cursor-pointer"
            />
            </Link>
          </div>

     
          <div className="flex items-center gap-6 text-2xl text-gray-700 relative">
            <FaUser className="cursor-pointer hover:text-gray-900 transition" />

            <button
              onClick={() => setIsOpen(true)}
              className="relative cursor-pointer hover:text-gray-900 transition"
            >
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

     
        <div className="bg-white border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex justify-center gap-8 py-3 font-medium text-gray-700 text-sm sm:text-base">
              <li>
                <span className="cursor-pointer hover:text-blue-600">
                  <Link to="/collection/all">collection</Link>
                  
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-blue-600">
                   <Link to="/collection/best-sellers">Best Seller</Link>
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-blue-600">
                   <Link to="/pages/about">Our Story</Link>
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-blue-600">
                  <Link to="/pages/contact">Contact Us</Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
        
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0  bg-opacity-0.7 z-40 transition-opacity"
          ></div>

    
        <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transition-transform duration-300 flex flex-col">
  <div className="flex justify-between items-center p-4 border-b flex-shrink-0">
    <h2 className="text-lg font-semibold">Your Cart</h2>
    <button
      onClick={() => setIsOpen(false)}
      className="text-gray-600 hover:text-black"
    >
      <FaTimes size={20} />
    </button>
  </div>

  <div className="flex-1 overflow-x-auto">
    <CartDrawer />
  </div>
</div>

        </>
      )}
    </>
  );
}

export default Header;
