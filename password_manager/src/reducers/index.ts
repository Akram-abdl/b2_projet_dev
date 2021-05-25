import { combineReducers } from "redux";

import identifications from "./identifications";
import auth from "./auth";
import searchSitesName from "./searchSitesName";

export const reducers = combineReducers({ identifications, auth, searchSitesName });

export type RootState = ReturnType<typeof reducers>;
