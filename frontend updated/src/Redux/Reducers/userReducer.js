import { GET_METHOD_USER } from "../Actions/type";

const initialState = {
  Loader: false,
  services: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_METHOD_USER:
      return {
        ...state,
        Loader: true,
        services: action.data,
      };
    default:
      return state;
  }
}
