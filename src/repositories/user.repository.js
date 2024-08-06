import { UserModel } from '../models/user.model.js';

class UserRepository {
    async Get() {
        const users = await UserModel.findAll();
        return users;
    }

    async Create(user) {
        return await UserModel.create(user);
    }

    async GetById(id) {
        return await UserModel.findOne({ where: { id } });
    }
}

export { UserRepository };
