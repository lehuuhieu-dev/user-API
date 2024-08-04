import { STATUS_CODE } from "../../constants/index.js";

class ErrorResponse extends Error {
    constructor({ message, status }) {
        super(message);

        this.status = status;
    }
}

class BadRequestError extends ErrorResponse {
    constructor({ message = 'Bad request error', statusCode = STATUS_CODE.BAD_REQUEST }) {
        super(message, statusCode);
    }
}

export { BadRequestError };
