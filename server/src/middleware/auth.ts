import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../config';


const auth = async (req:any, res:any, next:any) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData:any;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, SECRET_KEY);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;