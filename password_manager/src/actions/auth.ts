import actionTypes from "../constants/actionTypes";
import * as api from "../api/index";

import IUser from "../models/user";

export const signin = (formData: IUser, history: any) => async (dispatch: any) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: actionTypes.AUTH, data });

    history.push("/home");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData: IUser, history: any) => async (dispatch: any) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: actionTypes.AUTH, data });

    history.push("/home");
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (user: IUser) => async (dispatch: any) => {
  try {
    const { data } = await api.patchUser(user);

    console.log(data);

    dispatch({ type: actionTypes.PATCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (setUser: any, history: any, dispatch: any) => {
  dispatch({ type: actionTypes.LOGOUT });

  history.push("/");

  setUser(null);
};
