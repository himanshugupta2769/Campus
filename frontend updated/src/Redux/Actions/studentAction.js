import { GET_METHOD_STUDENT } from "./type";
import axios from "axios";

export const fetchStudentData = () => (dispatch) => {
  axios
    .get(`http://localhost:3004/student`)
    .then((res) =>
      dispatch({
        type: GET_METHOD_STUDENT,
        data: res.data,
      })
    )
    .catch((err) => console.log(err));
};
