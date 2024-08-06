import { STATUS_CODE } from '../../constants/index.js';

class SuccessResponse {
    constructor({ message = 'Send request successfully', statusCode = STATUS_CODE.OK, data = {} }) {
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    }

    send(res) {
        return res.status(this.statusCode).json(this);
    }
}

class Ok extends SuccessResponse {
    constructor({ message, data }) {
        super({ message, data });
    }
}

class Created extends SuccessResponse {
    constructor({ message, data }) {
        super({ message: message || 'Created successfully', statusCode: STATUS_CODE.CREATED, data });
    }
}

export { Created, Ok };
