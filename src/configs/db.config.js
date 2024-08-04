import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'sa',
    password: '123@qaz',
    database: 'user.lehuuhieu.dev',
    port: '1433',
    dialect: 'mssql',
});

export { sequelize };
