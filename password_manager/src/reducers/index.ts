import { combineReducers } from 'redux';

import identifications from './identifications';
import auth from './auth';

export const reducers = combineReducers({ identifications, auth });

export type RootState = ReturnType<typeof reducers>