import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import swal from "sweetalert";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const AddStu = () => {
  axios.defaults.withCredentials = true;
    let navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    age: "",
    phone: "",
    branch : ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
     
      if (
        data.name != "" &&
        data.lastname != "" &&
        data.email != "" &&
        data.age != "" &&
        data.phone != "" &&
        data.branch != ""
      ) {
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
          if (data.phone.match("[0-9]{10}")) {
            axios
              .post("http://localhost:3004/new", {
                name: data.name,
                lastname: data.lastname,
                email: data.email,
                age: data.age,
                phone: data.phone,
                branch: data.branch,
              })
              .then((res) => {
                console.log(res.data.statusCode);
                if (res.data.statusCode == 404) {
                  swal({
                    title: "User Already Registered!",
                    text: "Please Check!",
                    icon: "error",
                    timer: 2000,
                  });
                }
                if (res.data.statusCode == 200) {
                  swal({
                    title: "Register SuccessFully!",
                    text: "Thank you!",
                    icon: "success",
                  });
                  navigate("/Nav/User/");
                }
              });
          } else {
            swal({
              title: "InValid Phone Number...",
              text: "Please Enter 10 Digit Numbe...",
              icon: "error",
              timer: 2000,
            });
          }
        } else {
          swal({
            title: "InValid Email...",
            text: "Please Check!",
            icon: "error",
            timer: 2000,
          });
        }
      }
        else{
          swal({
          title: "Please Fill All Field...",
          text: "Please Check!",
          icon: "error",
          timer: 2000,
        });
        }
     
        
      
      
  };

  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <>
      <div className="flex-1 mt-16 mr-6 ml-6">
        <div class="max-w-screen-md mx-auto p-5">
          <div class="text-center mb-16">
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Add <span class="text-indigo-600">Student</span>
            </h3>
          </div>

          <form onSubmit={handleSubmit} class="w-full">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="Rajneesh"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="lastname"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="lastname"
                  type="text"
                  placeholder="Rana"
                  value={data.lastname}
                  onChange={handleChange}
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>

              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="phone"
                >
                  Phone Number
                </label>
                <input
                  pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="phone"
                  type="number"
                  placeholder="Enter Mobile Number"
                  value={data.phone}
                  onChange={handleChange}
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="age"
                >
                  Age
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="age"
                  type="number"
                  placeholder="Enter Your Age"
                  value={data.age}
                  onChange={handleChange}
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="branch"
                >
                  Branch
                </label>
                <div class="relative">
                  <select
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="branch"
                    value={data.branch}
                    onChange={handleChange}
                  >
                    <option value="">Select Branch</option>
                    <option value="Btech">Btech</option>
                    <option value="MBA">MBA</option>
                    <option value="BBA">BBA</option>
                    <option value="BCA">BCA</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 11l3-3 3 3h-6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-end">
              <button
                class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AddStu;
