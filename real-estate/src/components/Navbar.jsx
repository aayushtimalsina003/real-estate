import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import LoginForm from "./Login.jsx";
import SignUpForm from "./SignUp.jsx";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // State for authentication model
  const [showAuthModal, setShowAuthModal] = useState(false);
  // 'login' or 'signup'
  const [formType, setFormType] = useState("login");

  // Prevent page scrolling on mobile menu
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button
          className="hidden md:block bg-white px-8 py-2 rounded-full"
          onClick={() => {
            setFormType("login"); // Default to login form
            setShowAuthModal(true);
          }}
        >
          Sign Up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu Icon"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close Icon"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
          onClick={() => setShowAuthModal(false)} // Close modal on outside click
        >
          <div
            className="bg-white p-8 rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            {formType === "login" ? (
              <>
                <LoginForm />
                <p className="mt-4 text-sm">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setFormType("signup")}
                    className="text-blue-500 underline"
                  >
                    Create Account
                  </button>
                </p>
              </>
            ) : (
              <>
                <SignUpForm />
                <p className="mt-4 text-sm">
                  Already have an account?{" "}
                  <button
                    onClick={() => setFormType("login")}
                    className="text-blue-500 underline"
                  >
                    Login
                  </button>
                </p>
              </>
            )}
            <button
              className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-red-600 hover:text-white transition-all duration-150 ease-in-out"
              onClick={() => setShowAuthModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
