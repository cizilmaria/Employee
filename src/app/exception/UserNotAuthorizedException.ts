import HttpException from "./HttpException";
import { ErrorCodes } from "../util/errorCode";

class UserNotAuthorizedException extends HttpException {
    constructor(){
        const errorDetail = ErrorCodes.USER_NOT_AUTHORIZED_EXCEPTION;
        super(401, errorDetail.MESSAGE, errorDetail.CODE);
    }
}

export default UserNotAuthorizedException;