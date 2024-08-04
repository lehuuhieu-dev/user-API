import { User } from '../models/user.model.js';

class UserRepository {
    async Get() {
        const users = await User.findAll();
        return users;
    }
}

export { UserRepository };
