import { Sequelize, DataTypes } from 'sequelize';

let sequelize;

// override timezone formatting
DataTypes.DATE.prototype._stringify = function (date, options) {
    date = this._applyTimezone(date, options);

    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
}.bind(DataTypes.DATE.prototype);

if (!sequelize) {
    sequelize = new Sequelize({
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        timezone: '+07:00',
    });
}

export { sequelize };
