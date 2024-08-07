'use strict';

import { UserService } from '../services/user.service.js';
import { Created, Ok } from '../common/responses/success.response.js';

class UserController {
    static async Get(req, res, next) {
        try {
            return new Ok({
                data: await new UserService().Get(),
            }).send(res);
        } catch (error) {
            next(error);
        }
    }

    static async Create(req, res, next) {
        try {
            return new Created({
                data: await new UserService().Create(req.body),
            }).send(res);
        } catch (error) {
            next(error);
        }
    }

    static async GetById(req, res, next) {
        try {
            const { id } = req.params;

            return new Ok({
                data: await new UserService().GetById(id),
            }).send(res);
        } catch (error) {
            next(error);
        }
    }

    static async DeleteById(req, res, next) {
        try {
            const { id } = req.params;
            await new UserService().DeleteById(id);

            return new Ok({
                message: `Delete user with id: ${id} successfully`,
            }).send(res);
        } catch (error) {
            next(error);
        }
    }
}

export { UserController };
