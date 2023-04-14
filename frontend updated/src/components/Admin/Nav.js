import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "../../assets/control.png";
import Avatar from "../../assets/avatar.png";
import User from "../../assets/management.png";
import logo from "../../assets/logo.png";
import p from "../../assets/p.jpg";
import Book from "../../assets/book.png";
import Man from "../../assets/man.png";
import Log from "../../assets/log.png";
import Dashboard from "../../assets/dashboard.png";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = () => {
   let navigate = useNavigate();
  const [open, setOpen] = useState(true);
  axios.defaults.withCredentials = true;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = () => {
    axios.get("http://localhost:3004/me").then((res) => {
      const userData = res.data.user;
      console.log(userData);
      setData(userData);
    });
  };

   const logout = () => {
    axios.get("http://localhost:3004/logout").then((res) => {
      console.log(res);
     navigate("/");
    });
  };

 

  const Menus = [
    { title: "Dashboard", url: "/Nav/AdminDashboard", src: Dashboard },
    { title: "Student", url: "/Nav/Student", src: Avatar },
    { title: "User ", url: "/Nav/User", src: User },
    { title: "Library", url: "/Nav/Library", src: Book },
    // { title: "Profile", url: "/Nav/Profile", src: Man },

    { title: "Sign Out", url: "/", src: Log,   },
  ];

  return (
    <>
      <div className="">
        <div className=" shadow-md w-full  top-0 left-0 ">
          <div className="md:flex items-center justify-between bg-blue-500 py-3 md:px-10 px-7">
            <div>
              {/* <span className=" ">Campus Crate</span>   */}
              <span className=" flextext-3xl text-indigo-600   ">
                <img className="  " src={logo} />
              </span>
            </div>

            <h1 className="text-white text-2xl ml-[12rem] text-center">
              Admin
            </h1>

            <h1 className="text-white  mr-6 flex gap-4 font-bold">
              <span className=" text-lg"> Welcome</span>{" "}
              <h2 className="text-white mt-[2px]" onClick={logout}>
                {data.name}
              </h2>
              {/* <img className="w-14 h-14 rounded-full " src={p} /> */}
            </h1>

            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
          </div>
        </div>

        {/* Side BAr */}
        <div className="flex   ">
          <div
            className={` ${
              open ? "w-60 " : "w-20 "
            } bg-blue-500 h-screen p-5  pt-8 relative duration-300`}
          >
            <img
              src={Image}
              className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex  gap-x-4 items-center"></div>
            <ul className="pb-4 mb-10">
              {Menus.map((Menu, index) => (
                <Link
                  to={Menu.url}
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                  } `}
                >
                  <a className="flex gap-4 text-lg mb-4 " href={Menu.url}>
                    <img src={`${Menu.src}`} />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Nav;
