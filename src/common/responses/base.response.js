import { STATUS_CODE } from '../../constants/index.js';

class BaseResponse {
    constructor({ message = 'Send request successfully', statusCode = STATUS_CODE.OK, data = {} }) {
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    }

    send(res) {
        return res.status(this.statusCode).json(this);
    }
}

export { BaseResponse };
