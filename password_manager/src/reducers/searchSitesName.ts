import actionTypes from "../constants/actionTypes";

const searchSitesName = (sitesName = [], action: any) => {
  switch (action.type) {
    case actionTypes.SEARCH_SITE_NAME:
      return action.payload;
    default:
      return sitesName;
  }
};
export default searchSitesName;
