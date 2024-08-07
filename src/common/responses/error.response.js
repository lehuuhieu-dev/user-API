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

class NotFoundError extends ErrorResponse {
    constructor(message = 'Not found error') {
        super({ message, statusCode: STATUS_CODE.NOT_FOUND });
    }
}

export { BadRequestError, NotFoundError };
