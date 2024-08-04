import { UserRepository } from '../repositories/user.repository.js';

class UserService {
    async Get() {
        return await new UserRepository().Get();
    }
}

export { UserService };
