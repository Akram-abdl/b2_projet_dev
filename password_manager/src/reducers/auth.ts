import actionTypes from "../constants/actionTypes";

const auth = (state = { authData: null }, action: any) => {
  switch (action.type) {
    case actionTypes.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionTypes.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};
export default auth;
