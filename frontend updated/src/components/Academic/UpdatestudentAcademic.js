import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const UpdatestudentAcademic = () => {
  let navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const [udateData, setUpdateData] = useState({
    name: "",
    lastname: "",
    email: "",
    age: "",
    phone: "",
    branch: "",
  });

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`http://localhost:3004/userById/${id}`);
      console.log(data);
      setUpdateData(data.users[0]);
    };
    fetch();
  }, []);

  // console.log(udateData);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3004/uesrUpdateData/${id}`, udateData)

      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          swal({
            title: "Updated Successfull...",
            text: "Thank you!",
            icon: "success",
          });
          navigate("/NavAcademic/AddstuAcademic");
        } else {
          swal({
            title: "Update Not Successfull!",
            text: "Please Check!",
            icon: "error",
            timer: 2000,
          });
        }
      });
  };

  function handleChange(e) {
    const newData = { ...udateData };
    newData[e.target.id] = e.target.value;
    setUpdateData(newData);
  }

  return (
    <>
      <div className="flex-1 mt-16 mr-6 ml-6">
        <div class="max-w-screen-md mx-auto p-5">
          <div class="text-center mb-16">
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Update <span class="text-indigo-600">Student</span>
            </h3>
          </div>

          <form class="w-full">
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
                  value={udateData.name}
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
                  value={udateData.lastname}
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
                  value={udateData.email}
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
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="phone"
                  type="number"
                  placeholder="Enter Mobile Number"
                  value={udateData.phone}
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
                  value={udateData.age}
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
                    value={udateData.branch}
                    onChange={handleChange}
                  >
                    <option value="">{udateData.branch}</option>
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
                onClick={handleSubmit}
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

export default UpdatestudentAcademic;
