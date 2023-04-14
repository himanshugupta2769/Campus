import {GET_METHOD_USER} from './type'
import axios from 'axios'

export const fetchUserData = () => dispatch => {
    axios
      .get(`http://localhost:3004/user`)
      .then((res) =>
        dispatch({
          type: GET_METHOD_USER,
          data: res.data,
        })
      )
      .catch((err) => console.log(err));
}