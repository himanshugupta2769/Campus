import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import swal from "sweetalert";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Log = () => {
axios.defaults.withCredentials = true;
    const [data , setData] = useState({
        email : "",
        password : ""
    })

    function handleSubmit(e) {
        e.preventDefault();
        var url = "http://localhost:3004/login/";        
        axios
          .post(url, {
            email: data.email,
            password: data.password,
          })
          .then((res) => {
            console.log(res);
            if (res.data.statusCode == 200) {
              if (res.data.user.role == "admin") {
                window.location = "/Nav/AdminDashboard";
                swal({
                  title: "Login SuccessFully Admin!",
                  text: "Thank you!",
                  icon: "success",
                });
              }
              if (res.data.user.role == "academics") {
                window.location = "/NavAcademic/DashboardAcademic";
                swal({
                  title: "Login SuccessFully Academic!",
                  text: "Thank you!",
                  icon: "success",
                });
              }
              if (res.data.user.role == "accoutant") {
                window.location = "/NavAccount/DashboardAccount";
                swal({
                  title: "Login SuccessFully Accountant!",
                  text: "Thank you!",
                  icon: "success",
                });
              }
              if (res.data.user.role == "library") {
                window.location = "/NavLirary/DashboardLirary";
                swal({
                  title: "Login SuccessFully Library!",
                  text: "Thank you!",
                  icon: "success",
                });
              }
              if (res.data.user.role == "student") {
                window.location = "/NavAccount/StudentAccount";
                swal({
                  title: "Login SuccessFully Library!",
                  text: "Thank you!",
                  icon: "success",
                });
              }
            }
          })
          .catch((err) => {
            swal({
              title: "Wrong Detail!",
              text: "Please Check!",
              icon: "error",
              timer: 2000,
            });
          });
      
    }

    function handleChange(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    // onSubmit = async(values) => {
    //     console.log(values.email);
    //     console.log(values.password)

    //     const data = {
    //         email : values.email,
    //         password : values.password
    //     }

    //     var url = "http://localhost:3004/login/";

    //     axios
    //       .post(url, data)
    //       .then((res) => {
    //         if (res.data.statusCode == 200) {
    //           swal({
    //             title: "Login SuccessFully!",
    //             text: "Thank you!",
    //             icon: "success",
    //           });
    //         }
    //       })
    //       .catch((err) => {
    //         swal({
    //           title: "Wrong Detail!",
    //           text: "Please Check!",
    //           icon: "error",
    //           timer: 2000,
    //         });
    //       });
    // }

    return (
      <>
        <body class="  font-sans bg-gray-800 h-[100vh] ">
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
                  <form onSubmit={handleSubmit} onsubmit="return false;">
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
                        value={data.email}
                        onChange={handleChange}
                        name="email"
                        placeholder="Enter Your Email"
                        class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      />
                    </div>

                    <div class="mb-5">
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-white"
                      >
                        Password
                      </label>

                      <input
                        type="text"
                        name="password"
                        id="password"
                        value={data.password}
                        onChange={handleChange}
                        placeholder="Enter Your password"
                        class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      />
                    </div>

                    <button class="w-full p-3 mt-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white rounded shadow">
                      Login
                    </button>
                  </form>
                </div>

                <div class="flex justify-center p-8 text-sm border-t border-gray-300 bg-gradient-to-r from-indigo-500 ...">
                  {/* <a href="#" class="font-medium text-indigo-500">Create account</a> */}

                  <Link to="/Forgot" class="text-white ">
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
}

export default Log