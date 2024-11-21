import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //navigation bar

  //collapsing menu
  const setMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <div className=" relative mt-4 flex justify-between items-center">
      <p className=" font-bold text-3xl">
        <span className=" text-gray-400">Sahand</span>
        <span className=" text-gray-700">Estate</span>
      </p>
      <input
        className=" hidden md:block outline outline-[0.5px] rounded-full px-2 sm:w-[30vw] md:w-[30vw]  lg:w-[40vw]"
        type=" search"
        placeholder=" Search"
      />

      {isOpen ? (
        <GiHamburgerMenu
          onClick={setMenu}
          size={30}
          className=" z-10 md:hidden cursor-pointer font-medium"
        />
      ) : (
        <GiCancel
          onClick={setMenu}
          size={30}
          className=" z-10 md:hidden cursor-pointer font-medium"
        />
      )}

      <nav className="gap-4 hidden md:flex">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/signin"}>Sign in</NavLink>
      </nav>

      {/** //opening side bar on mobile */}

      {!isOpen ? (
        <div className=" bg-white top-0 right-0 w-[100%] transition-all h-[100vh] md:hidden  fixed">
          <nav className="mt-6 pl-4 gap-4 text-white flex flex-col  ">
            <NavLink
              onClick={setMenu}
              className=" hover:bg-gray-200 py-2 px-2 text-black font-semibold text-xl"
              to={"/home"}
            >
              Home
            </NavLink>
            <NavLink
              onClick={setMenu}
              className=" hover:bg-gray-200 py-2 px-2 text-black font-semibold text-xl"
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              onClick={setMenu}
              className=" hover:bg-gray-200 py-2 px-2 text-black font-semibold text-xl"
              to={"/signin"}
            >
              Sign in
            </NavLink>
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
