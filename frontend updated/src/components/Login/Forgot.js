import React from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Forgot = () => {
  return (
    <>
      <body class="  font-sans bg-cyan-600 h-[100vh] ">
        <div class="container mx-auto p-8 flex">
          <div class="max-w-md w-full mx-auto">
            <h1 class="text-4xl text-center text-white   font-bold font font-mono ">
              <img
                className="w-[300px] inline-block mb-2   "
                src={Logo}
                alt="Logo"
              />
            </h1>

            <div class="bg-[#05386B] rounded-lg overflow-hidden shadow-2xl shadow-gray-900 ">
              <div class="p-8">
                <p class="text-3xl  text-white text-center font ">Forgot Password ?</p>
               
                <p class="pb-2 mt-6 mb-4 text-base text-white text-center ">
                  Enter your email and we'll send you a link to reset your
                  password.
                </p>
                <form>
                  <div class="mb-5">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium  text-white"
                    >
                      Email
                    </label>

                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    />
                  </div>

                  <button class="w-full p-3 mt-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white rounded shadow">
                    Reset Your Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Forgot;
