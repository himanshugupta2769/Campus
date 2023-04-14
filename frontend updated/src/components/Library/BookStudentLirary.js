import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import validator from "validator";

const BookStudentLirary = () => {
  let navigate = useNavigate();
  axios.defaults.withCredentials = true;
   const { id } = useParams();
   console.log(id);

  const [udateData, setUpdateData] = useState({
    book: "",
    user_id: `${id}`,
    bookIssueDate : "",
  });

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
        .post(`http://localhost:3004/library/`, udateData)

        .then((res) => {
          console.log(res);
          if (res.data.statuscode == 200) {
            swal({
              title: "Book Issued Successfull...",
              text: "Thank you!",
              icon: "success",
            });
            navigate("/NavLirary/StudentLirary");
          } else {
            swal({
              title: "Book Not Issued Successfull!",
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
      {" "}
      <div className="flex-1 mt-16 mr-6 ml-6 ">
        <div className=""></div>

        <div class="grid grid-cols-2 gap-4 ">
          <div>
            <h1 class="text-gray-500 mb-1">
              Book <span class="text-blue-500">*</span>
            </h1>
            <input
              type="hidden"
              value={udateData.user_id}
              onChange={handleChange}
              id="user_id"
              name="user_id"
              class="bg-gray-50 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
            <select
              type="file"
              value={udateData.book}
              onChange={handleChange}
              id="book"
              class="bg-gray-50 text-gray-900 text-sm rounded-lg w-full p-2.5"
            >
              <option selected>Select Book</option>
              <option value="DSA">DSA</option>
              <option value="Computer Organisation">
                Computer Organisation
              </option>
              <option value="DAA">DAA</option>
              <option value="Digital Electronics">Digital Electronics</option>
            </select>
          </div>
          <div>
            <label for="bookIssueDate" class="block text-gray-500 mb-1">
              Book Issue Date:
            </label>
            <input
              type="datetime-local"
              value={udateData.bookIssueDate}
              onChange={handleChange}
              id="bookIssueDate"
              name="bookIssueDate"
              class="bg-gray-50 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div class="col-span-2 flex justify-end">
            <button
              onClick={handleSubmit}
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default BookStudentLirary;
