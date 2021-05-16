import axios from "axios";
import IUser from "../models/user";
import IIdentification from "../models/identification";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile") || "").token}`;
  }
  return req;
});

export const signIn = (formData: IUser) => API.post("/users/signin", formData);
export const signUp = (formData: IUser) => API.post("/users/signup", formData);

export const fetchIdentifications = (user_id: string) => API.get(`/identifications/${user_id}`);
export const createIdentification = (newIdentification: IIdentification) => API.post("/identifications", newIdentification);
export const patchIdentification = (id: string, newIdentification: IIdentification) => API.patch(`/identifications/${id}`, newIdentification);
export const deleteIdentification = (id: string) => API.delete(`/identifications/${id}`);
