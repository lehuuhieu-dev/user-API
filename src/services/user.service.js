import { UserRepository } from '../repositories/user.repository.js';

class User {
    constructor({ id, fullName, username, email, password, status, createdAt, updatedAt }) {
        this.id = id;
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

class UserService {
    async Get() {
        return await new UserRepository().Get();
    }

    async Create(user) {
        return await new UserRepository().Create(
            new User({
                fullName: user.fullName,
                username: user.username,
                email: user.email,
                password: user.password,
                status: user.status,
            })
        );
    }

    async GetById(id) {
        return await new UserRepository().GetById(id);
    }
}

export { UserService };
