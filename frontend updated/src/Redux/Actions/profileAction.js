import { GET_METHOD_PROFILE } from "./type";
import axios from "axios";

export const fetchProfileData = () => (dispatch) => {
  axios
    .get(`http://localhost/api/login`)
    .then((res) =>
      dispatch({
        type: GET_METHOD_PROFILE,
        data: res.data,
      })
    )
    .catch((err) => console.log(err));
};
