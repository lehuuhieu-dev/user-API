import { BaseResponse } from './base.response.js';
import { STATUS_CODE } from '../../constants/index.js';

class Ok extends BaseResponse {
    constructor({ message, data }) {
        super({ message, data });
    }
}

class Created extends BaseResponse {
    constructor({ message = 'Created successfully', data }) {
        super({ message: message, statusCode: STATUS_CODE.CREATED, data });
    }
}

export { Created, Ok };
