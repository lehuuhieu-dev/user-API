import { UserModel } from '../models/user.model.js';
import { NotFoundError } from '../common/responses/error.response.js';

class UserRepository {
    async Get() {
        const users = await UserModel.findAll();
        return users;
    }

    async Create(user) {
        return await UserModel.create(user);
    }

    async GetById(id) {
        const user = await UserModel.findOne({ where: { id } });

        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async DeleteById(id) {
        const user = await this.GetById(id);

        await user.destroy();
    }
}

export { UserRepository };
