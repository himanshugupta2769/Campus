import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Profile = () => {
axios.defaults.withCredentials = true;
const [data, setData] = useState([]);

 useEffect(() => {
   fetchInfo();
 }, []);

   const fetchInfo = () => {
      axios.get("http://localhost:3004/me").then((res) => {
        const userData = res.data.user;;
        console.log(userData);
       setData(userData);
     });
   }; 
   
    return (
      <>
        <div class="flex-1 mt-4">
          {/* <!-- Student Profile --> */}
          <div class="student-profile py-4">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="card shadow-sm">
                    <div class="card-header bg-transparent text-center">
                      <img
                        class="profile_img"
                        src="https://placeimg.com/640/480/arch/any"
                        alt=""
                      />
                      <h3>{data.name}</h3>
                    </div>
                    <div class="card-body">
                      <p class="mb-0 text-center">
                        <strong class="pr-2">User ID:</strong>
                        {data.reg_id}
                      </p>
                      {/* <p class="mb-0">
                        <strong class="pr-1">Class:</strong>4
                      </p> */}
                      {/* <p class="mb-0">
                        <strong class="pr-1">Section:</strong>C
                      </p> */}
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 ml-[300px]">
                  <div class="card shadow-sm mt-8">
                    <div class="card-header bg-transparent border-0">
                      <h3 class="mb-0">
                        <i class="far fa-clone pr-1 text-center ml-[150px]   "></i>General
                        Information
                      </h3>
                    </div>
                    <div class="card-body pt-0 mt-8">
                      <table class="table table-bordered">
                        <tr>
                          <th width="30%">User Id</th>
                          <td width="2%">:</td>
                          <td> {data.reg_id}</td>
                        </tr>
                        <tr>
                          <th width="30%">Email </th>
                          <td width="2%">:</td>
                          <td>{data.email}</td>
                        </tr>
                        <tr>
                          <th width="30%">age</th>
                          <td width="2%">:</td>
                          <td>{data.age}</td>
                        </tr>
                        <tr>
                          <th width="30%">Phone Number</th>
                          <td width="2%">:</td>
                          <td>{data.phone}</td>
                        </tr>
                        <tr>
                          <th width="30%">Role</th>
                          <td width="2%">:</td>
                          <td>{data.role}</td>
                        </tr>

                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </>
    );
}

export default Profile

















