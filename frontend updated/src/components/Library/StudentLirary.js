import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import moment from "moment";

const StudentLirary = () => {

  const today = Date.now();
     let navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const [posts, setPosts] = useState([]);
  const [serach, setSearch] = useState("");

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    setLoding(true);
    axios.get("http://localhost:3004/student").then((res) => {
      const userData = res.data.users;
      console.log(userData);
      setPosts(userData);
      setLoding(false);
    });
  };

  return (
    <>
      <div class="flex-1 mt-16 mr-6 ml-6">
        <div class="flex flex-col md:flex-row items-center justify-between mb-4 mt-8">
          <div class="relative mb-4 md:mb-0 md:mr-4">
            <input
              id="search"
              type="text"
              class="bg-gray-200 rounded-full px-14 py-2 pr-8 "
              placeholder="Search here......"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-3">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M17 11h-4V7c0-.55-.45-1-1-1s-1 .45-1 1v4H7c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1v-4h4c.55 0 1-.45 1-1s-.45-1-1-1z" />
            </svg> */}
            </button>
          </div>
          <div class="relative mb-4 md:mb-0 md:ml-4 flex-1">
            <text class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-4 rounded-full w-full md:w-auto">
              Filter
            </text>
          </div>

          {/* <!-- Modal toggle --> */}
          {/* <button
            class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <Link to="/">Add Student</Link>
          </button> */}
        </div>

        <div class="overflow-x-auto w-full mt-8">
          <table class="border-collapse w-full">
            <thead>
              <tr>
                <th class="px-4 py-2 border border-gray-300">Name</th>
                <th class="px-4 py-2 border border-gray-300">Last Name</th>
                <th class="px-4 py-2 border border-gray-300">Age</th>
                <th class="px-4 py-2 border border-gray-300">Email ID</th>
                <th class="px-4 py-2 border border-gray-300">Phone Number</th>
                <th class="px-4 py-2 border border-gray-300">Branch</th>
                <th class="px-4 py-2 border border-gray-300">Book Issue</th>
                <th class="px-4 py-2 border border-gray-300">
                  Book Issue Date
                </th>
                <th class="px-4 py-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.length > 0
                ? posts
                    .filter((value) => {
                      if (serach === "") {
                        return value;
                      } else if (
                        value.name.toLowerCase().includes(serach.toLowerCase())
                      ) {
                        return value;
                      }
                    })
                    .map((data) => (
                      <tr>
                        <td class="border px-4 py-2">{data.name}</td>
                        <td class="border px-4 py-2">{data.lastname}</td>
                        <td class="border px-4 py-2">{data.age}</td>
                        <td class="border px-4 py-2">{data.email}</td>
                        <td class="border px-4 py-2">{data.phone}</td>
                        <td class="border px-4 py-2">{data.branch}</td>
                        <td class="border px-4 py-2">{data.book ? 'Book Issued' : 'Book Not Issued'}</td>
                        <td class="border px-4 py-2">
                          {moment(data.bookIssueDate).format(
                            "DD/MM/YYYY HH:mm"
                          )}
                        </td>
                        <td class="border px-4 py-2">
                          <button
                            onClick={() =>
                              navigate(
                                `/NavLirary/BookStudentLirary/${data._id}`
                              )
                            }
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))
                : ""}
            </tbody>
          </table>
        </div>
      </div>

      <Outlet />
    </>
  );
};

  export default StudentLirary
  
  

// Student.propTypes = {
//   fetchStudentData: PropTypes.func,
// };


// const mapStateToProps = (state) => ({
//   student: state.studentReducer.student,
// });

// export default connect(mapStateToProps, { fetchStudentData })(Student);