import Sequelize from 'sequelize';

const dbname = 'agencia_viajes';
const user = 'daniel';
const password = 'c0ntr@$3ñ@$Daniel';

const db = new Sequelize(dbname, user, password, {
    host: '127.0.0.1',
    port: '3308',
    dialect: 'mysql',
    define: {
        timestamps: false,
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