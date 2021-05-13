import axios from 'axios';
import IUser from '../models/user';

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const signIn = (formData: IUser) => API.post('/users/signin', formData);
export const signUp = (formData: IUser) => API.post('/users/signup', formData);

export const fetchIdentifications = (user_id:number) => API.get(`/identifications/${user_id}`);
export const createIdentification = (newIdentification:any) => API.post('/identifications', newIdentification);
export const patchIdentification = (id:number, newIdentification:any) => API.patch(`/identifications/${id}`, newIdentification);
export const deleteIdentification = (id:number) => API.delete(`/identifications/${id}`);
