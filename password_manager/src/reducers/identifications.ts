import actionTypes from '../constants/actionTypes';

export default (identifications = [], action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL:
            return action.payload;
        case actionTypes.CREATE:
            return [...identifications, action.payload];
        case actionTypes.PATCH:
            return identifications.map((identification: any) => (identification._id === action.payload._id ? action.payload : identification));
        case actionTypes.DELETE:
            return identifications.filter((identification: any) => identification._id !== action.payload);
        default:
            return identifications;
    }
};

