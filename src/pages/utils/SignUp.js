import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" flex flex-col   items-center gap-4 ">
      <h1 className=" text-3xl font-semibold my-7"> Sign Up</h1>
      <form className=" items-center flex flex-col gap-4">
        <input
          type="text"
          placeholder=" username"
          className="active:outline-none focus:outline-none px-2 py-2 w-[60vw] sm:w-[60vw] md:w-[40vw] border rounded-lg"
          id="username"
        />
        <input
          type="text"
          placeholder=" email"
          className="active:outline-none focus:outline-none px-2 py-2 w-[60vw] sm:w-[60vw] md:w-[40vw] border rounded-lg"
          id="email"
        />
        <input
          type="text"
          placeholder=" password"
          className="active:outline-none focus:outline-none px-2 py-2 w-[60vw] sm:w-[60vw] md:w-[40vw] border rounded-lg"
          id="password"
        />
        <button
          type="button"
          className=" rounded-lg bg-slate-700 uppercase w-[100%] py-2 hover:opacity-85 disabled:opacity-80 text-white font-semibold"
        >
          SIGN UP
        </button>
      </form>
      <p className=" mt-5">
        Already have an account?{" "}
        <Link className=" text-blue-700 underline gap-2 ">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
