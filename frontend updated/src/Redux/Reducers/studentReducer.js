import { GET_METHOD_STUDENT } from "../Actions/type";

const initialState = {
  Loader: false,
  student: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_METHOD_STUDENT:
      return {
        ...state,
        Loader: true,
        student: action.data,
      };
    default:
      return state;
  }
}
