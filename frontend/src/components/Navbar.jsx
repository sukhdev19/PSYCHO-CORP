import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const { theme, toggleTheme } = useTheme();

  // const toggleTheme = ()=>{
  //      if(theme === "dark"){
  //       setTheme("light");
  //       document.documentElement.classList.remove("dark");
  //      }else{
  //       setTheme("dark");
  //       document.documentElement.classList.add("dark");
  //      }
  // };
  //   useEffect(()=>{
  //      document.documentElement.className = theme;
  //   }, [theme]);

  return (
    <div className="flex items-center justify-between text-sm py-6 mb-5 border-b border-b-gray-400 h-20 sticky top-0 z-50 bg-white dark:bg-dark-background">
      <img
        onClick={() => navigate("/")}
        className="w-36 sm:w-40 cursor-pointer 0"
        src={assets.logo}
        alt=""
      />

      <ul className="md:flex items-center gap-2 font-bold hidden ml-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-primary px-4 py-2 rounded-full"
              : "text-gray-600 dark:text-dark-text hover:bg-primary hover:text-white px-4 py-2 rounded-full"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-primary px-4 py-2 rounded-full"
              : "text-gray-600 dark:text-dark-text hover:bg-primary hover:text-white px-4 py-2 rounded-full"
          }
        >
          ALL DOCTORS
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-primary px-4 py-2 rounded-full"
              : "text-gray-600 dark:text-dark-text hover:bg-primary hover:text-white px-4 py-2 rounded-full"
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-primary px-4 py-2 rounded-full"
              : "text-gray-600 dark:text-dark-text hover:bg-primary hover:text-white px-4 py-2 rounded-full"
          }
        >
          CONTACT
        </NavLink>

        <NavLink>
          <img
            className="pointer w-8 m-4"
            onClick={toggleTheme}
            src={theme === "dark" ? "/Moon.svg" : "/Sun.svg"}
            style={{
              filter:
                theme === "dark" ? "invert(1) brightness(0.8)" : "invert(0)",
            }}
          />
          {/* <button className="text-white bg-slate-600  hover:text-primary px-6 py-2 rounded-3xl dark:bg-dark-primary dark:text-dark-text" onClick = {toggleTheme} >
           {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button> */}
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    setToken(false);
                    navigate("/");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="Menu"
        />

        {/* ---- Mobile Menu ---- */}
        <div
          className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img src={assets.logo} className="w-36" alt="Logo" />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className="w-7"
              alt="Close"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-bold">
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-primary w-full text-center py-3 rounded-full"
                  : "text-gray-600 hover:bg-primary hover:text-white w-full text-center py-3 rounded-full"
              }
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/doctors"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-primary w-full text-center py-3 rounded-full"
                  : "text-gray-600 hover:bg-primary hover:text-white w-full text-center py-3 rounded-full"
              }
            >
              ALL DOCTORS
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-primary w-full text-center py-3 rounded-full"
                  : "text-gray-600 hover:bg-primary hover:text-white w-full text-center py-3 rounded-full"
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-primary w-full text-center py-3 rounded-full"
                  : "text-gray-600 hover:bg-primary hover:text-white w-full text-center py-3 rounded-full"
              }
            >
              CONTACT
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
