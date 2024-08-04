import { UserService } from '../services/user.service.js';
import { Ok } from '../utilities/responses/success.response.js';

class UserController {
    static async Get(req, res) {
        return new Ok({ data: await new UserService().Get() }).send(res);
    }
}

export { UserController };
