import { GET_METHOD_PROFILE } from "../Actions/type";

const initialState = {
  Loader: false,
  profile: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_METHOD_PROFILE:
      return {
        ...state,
        Loader: true,
        profile: action.data,
      };
    default:
      return state;
  }
}
