import React from "react";
import { useAuth } from "../AuthContext";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

function Header() {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();

  return (
    <>
      <header className="relative py-2 px-10 h-20 overflow-hidden">
        <div className="">
          <img
            alt=""
            src="https://images3.alphacoders.com/134/1342491.png"
            className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center"
          />
          <div className="text-center">
            <h1 className="text-2xl  font-bold tracking-tight text-amber-500 sm:text-5xl ">
              E-commerce
            </h1>
            <h3 className="text-xl font-bold tracking-tight text-cyan-300 ">
              {user && `Welcome ${user?.Name.FirstName}`}
            </h3>
          </div>
          <div>
            {user ? (
              <button
                type="submit"
                onClick={logout}
                className="absolute top-4 right-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-lg transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              []
            )}
          </div>
        </div>

        <div>
          {user && (
          <Link to="/cart"  className="absolute top-4 right-30 bg-red-200 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-lg transition-all duration-300">
            <img
              src="https://cdn-icons-png.freepik.com/512/7835/7835563.png"
              className=" h-6 w-6"
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          )}
        </div>
      </header>
    </>
  );
}
export default Header;
