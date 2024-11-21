import React, { useState } from "react";
import { json, Link } from "react-router-dom";

const SignUp = () => {
  //state variables
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  //form submission function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  //submitting the form contents
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    //defining response
    const res = await fetch("http://localhost:4000/api/auth/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });

    //response from the api call
    const data = await res.json();

    //incorrect response
    if (!res.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);
      setLoading(false);
    }

    setLoading(false);
    console.log(data);
  };

  console.log(formData);
  return (
    <div className=" flex flex-col   items-center gap-4 ">
      <h1 className=" text-3xl font-semibold my-7"> Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className=" items-center flex flex-col gap-4"
      >
        <div className=" outline outline-[1px] w-[100%] text-center bg-red-500 text-white">
          {error}
        </div>
        <input
          type="text"
          placeholder=" username"
          className={`active:outline-none focus:outline-none px-2 py-2 w-[60vw] sm:w-[60vw] md:w-[40vw] border rounded-lg  ${
            emptyFields?.includes("username")
              ? " border-red-500 outline-red-500"
              : ""
          }`}
          id="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder=" email"
          className={`active:outline-none focus:outline-none px-2 py-2 w-[60vw] sm:w-[60vw] md:w-[40vw] border rounded-lg  ${
            emptyFields?.includes("email")
              ? " border-red-500 outline-red-500"
              : ""
          }`}
          id="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder=" password"
          className={`active:outline-none focus:outline-none px-2 py-2 w-[60vw] sm:w-[60vw] md:w-[40vw] border rounded-lg  ${
            emptyFields?.includes("password")
              ? " border-red-500 outline-red-500"
              : ""
          }`}
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className=" rounded-lg bg-slate-700 uppercase w-[100%] py-2 hover:opacity-85 disabled:opacity-80 text-white font-semibold"
        >
          {loading ? "loading" : "sign up"}
        </button>
      </form>
      <p className=" mt-5">
        Already have an account?{" "}
        <Link to={"/signin"} className=" text-blue-700 underline gap-2 ">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
