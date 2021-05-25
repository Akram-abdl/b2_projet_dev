import actionTypes from "../constants/actionTypes";
import * as api from "../api/index";
import IIdentification from "../models/identification";

export const getIdentifications = (user_id: string) => async (dispatch: any) => {
  try {
    const { data } = await api.fetchIdentifications(user_id);

    dispatch({ type: actionTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createIdentification = (identification: IIdentification) => async (dispatch: any) => {
  try {
    const { data } = await api.createIdentification(identification);

    dispatch({ type: actionTypes.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateIdentification = (id: string, identification: IIdentification) => async (dispatch: any) => {
  try {
    const { data } = await api.patchIdentification(id, identification);

    dispatch({ type: actionTypes.PATCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteIdentification = (id: string) => async (dispatch: any) => {
  try {
    await api.deleteIdentification(id);

    dispatch({ type: actionTypes.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const searchSiteNameFromClearbit = (name: string) => async (dispatch: any) => {
  try {
    if (!name) return;
    const { data } = await api.searchSiteNameFromClearbit(name);

    dispatch({ type: actionTypes.SEARCH_SITE_NAME, payload: data });
  } catch (error) {
    console.log(error);
  }
};
