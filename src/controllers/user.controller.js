import { UserService } from '../services/user.service.js';
import { Created, Ok } from '../utilities/responses/success.response.js';

class UserController {
    static async Get(req, res) {
        return new Ok({ data: await new UserService().Get() }).send(res);
    }

    static async Create(req, res) {
        return new Created({
            data: await new UserService().Create(req.body),
        }).send(res);
    }

    static async GetById(req, res) {
        const { id } = req.params;
        
        return new Ok({
            data: await new UserService().GetById(id),
        }).send(res);
    }
}

export { UserController };
