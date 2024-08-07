import { BaseResponse } from '../common/responses/base.response.js';
import { STATUS_CODE } from '../constants/index.js';

const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode ?? STATUS_CODE.SERVER_ERROR;
    const errorMessage = error.message ?? 'Something went wrong, try again later';

    return new BaseResponse({
        message: errorMessage,
        statusCode,
    }).send(res);
};

export { errorHandler };
