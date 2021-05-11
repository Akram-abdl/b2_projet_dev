import axios from 'axios';
import IUser from '../models/user';

const API = axios.create({ baseURL: 'http://localhost:5000' })



export const signIn = (formData: IUser) => API.post('/users/signin', formData);
export const signUp = (formData: IUser) => API.post('/users/signgup', formData);