import { DataTypes } from 'sequelize';

import { sequelize } from '../configs/db.config.js';

const User = sequelize.define('Users', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'Id',
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    fullName: {
        type: DataTypes.STRING,
        field: 'FullName',
        allowNull: true,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        field: 'Username',
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        field: 'Email',
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        field: 'Password',
        allowNull: true,
    },
    status: {
        type: DataTypes.INTEGER,
        field: 'Status',
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'CreatedAt',
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'UpdatedAt',
        allowNull: true,
    },
});

export { User };
