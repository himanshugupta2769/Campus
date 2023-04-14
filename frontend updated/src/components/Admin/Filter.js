// import { Outlet } from "react-router-dom";
// import React from "react";
// import { Link } from "react-router-dom";
// import store from "../store";
// import { fetchFilterData } from "../Redux/Actions/userAction";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { Formik, ErrorMessage } from "formik";
// import axios from "axios";
// import swal from "sweetalert";

// export const ADD_TRANSACTION = "ADD_TRANSACTION";


// class Filter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isError: false,
//       errors: "",
//       isSuccess: false,
//       successMsg: "",
//       reg_id: "",
//     };
//   }

//   onChange = (e) => {
//     this.setState({ isError: false, errors: "" });
//     this.setState({ isSuccess: false, successMsg: "" });
//     this.setState({ [e.target.id]: e.target.value });
//   };

//   onSubmit = async (values) => {
//     console.log(values.reg_id);

//     let formData = new FormData();
//     formData.append("reg_id", values.reg_id);

//     axios
//       .post("http://localhost/api/getSearch", formData)

      
      
//          .then((res) => {
//             dispatch({
//               type: ADD_TRANSACTION,
//               data: res.data,
//             });
//         console.log(res);
//         this.setState({
//           reg_id: "",
//         });
//         store.dispatch(res.getFilter());
//         console.log(res.getFilter());
//       })
//       .catch((err) => {
//         alert(err);
//         swal("Something Wrong!!!", {
//           buttons: false,
//           timer: 3000,
//         });
//         this.setState({ isError: true, errors: err.message });
//       });
//   };

//   render() {
//     // const { check } = reg_id;
//     // console.log(check);
//     return (
//       <>
//         <div>
//           <div class="p-4 sm:ml-64 mt-10">
//             <Formik
//               initialValues={{
//                 reg_id: "",
//               }}
//               validate={(values) => {
//                 const errors = {};

//                 if (!values.reg_id.trim()) {
//                   errors.name = "Name is required...";
//                 }
//                 return errors;
//               }}
//               onSubmit={(values, actions) => {
//                 this.onSubmit(values).then(() => {
//                   actions.setSubmitting(false);
//                   actions.resetForm({
//                     values: {
//                       reg_id: "",
//                     },
//                   });
//                 });
//               }}
//             >
//               {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,
//                 handleReset,
//                 /* and other goodies */
//               }) => (
//                 <form onSubmit={handleSubmit}>
//                   <div class="flex flex-col md:flex-row items-center justify-between mb-4 mt-8">
//                     <div class="relative mb-4 md:mb-0 md:mr-4">
//                       <input
//                         id="reg_id"
//                         type="text"
//                         class="bg-gray-200 rounded-full px-4 py-2 pr-8 "
//                         placeholder="Search..."
//                         value={values.reg_id}
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                       />

//                       <button
//                         type="submit"
//                         class="absolute right-0 top-0 mt-3 mr-3"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M0 0h24v24H0z" fill="none" />
//                           <path d="M17 11h-4V7c0-.55-.45-1-1-1s-1 .45-1 1v4H7c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1v-4h4c.55 0 1-.45 1-1s-.45-1-1-1z" />
//                         </svg>
//                       </button>
//                     </div>
//                     <div class="relative mb-4 md:mb-0 md:ml-4 flex-1">
//                       <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full w-full md:w-auto">
//                         Filter
//                       </button>
//                     </div>

//                     <button
//                       class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                       type="button"
//                     >
//                       <Link to="/Adduser">Add User</Link>
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </Formik>
//             <div class="overflow-x-auto">
//               <table class="table-auto w-full border-collapse">
//                 <thead class="bg-gray-200">
//                   <tr>
//                     <th class="px-4 py-2">Name</th>
//                     <th class="px-4 py-2">Lastname</th>
//                     <th class="px-4 py-2">Age</th>
//                     <th class="px-4 py-2">Email</th>
//                     <th class="px-4 py-2">Phone</th>
//                     <th class="px-4 py-2">Role</th>
//                     <th class="px-4 py-2"></th>
//                   </tr>
//                 </thead>

//                 <tbody class="text-gray-700">
//                   {check.length > 0
//                     ? check.map((data) => (
//                         <tr>
//                           <td class="border px-4 py-2">{data.firstname}</td>
//                           <td class="border px-4 py-2">{data.lastname}</td>
//                           <td class="border px-4 py-2">{data.age}</td>
//                           <td class="border px-4 py-2">{data.email}</td>
//                           <td class="border px-4 py-2">{data.phone}</td>
//                           <td class="border px-4 py-2">{data.role}</td>
//                           <td class="border px-4 py-2">
//                             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                               Edit
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     : ""}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         <Outlet />
//       </>
//     );
//   }
// }

// Filter.propTypes = {
//   getFilter: PropTypes.func,
// };

// const mapStateToProps = (state) => ({
//   check: state.userReducer.check,
// });

// export default connect(mapStateToProps)(Filter);
