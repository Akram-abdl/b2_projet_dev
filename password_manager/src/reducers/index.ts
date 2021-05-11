import { combineReducers } from 'redux';

import identifications from './identifications';
import auth from './auth';

export const reducers = combineReducers({ identifications, auth });
