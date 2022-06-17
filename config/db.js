import Sequelize from 'sequelize';

const dbname = 'agenciaviajes';
const user = 'daniel';
const password = ''

const db = new Sequelize(dbname, user, password, {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamp: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorAliases: false,
});

export default db;