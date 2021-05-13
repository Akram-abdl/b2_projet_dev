import actionTypes from '../constants/actionTypes';
import * as api from '../api/index';

export const getIdentifications = (user_id:number) => async (dispatch:any) => {
  try {
    const { data } = await api.fetchIdentifications(user_id);

    dispatch({ type: actionTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createIdentification = (identification:any) => async (dispatch:any) => {
  try {
    const { data } = await api.createIdentification(identification);

    dispatch({ type: actionTypes.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateIdentification = (id:number, identification:any) => async (dispatch:any) => {
  try {
    const { data } = await api.patchIdentification(id, identification);

    dispatch({ type: actionTypes.PATCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteIdentification = (id:number) => async (dispatch:any) => {
  try {
    await api.deleteIdentification(id);

    dispatch({ type: actionTypes.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
