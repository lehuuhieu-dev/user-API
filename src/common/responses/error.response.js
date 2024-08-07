import { STATUS_CODE } from '../../constants/index.js';

class ErrorResponse extends Error {
    constructor({ message, statusCode }) {
        super(message);

        this.statusCode = statusCode;
    }
}

class BadRequestError extends ErrorResponse {
    constructor(message = 'Bad request error') {
        super({ message, statusCode: STATUS_CODE.BAD_REQUEST });
    }
}

export { BadRequestError };
