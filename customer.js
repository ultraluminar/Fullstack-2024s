import { Sequelize, DataTypes } from "sequelize";

const seq = new Sequelize('customerdb', 'root', 'mariadb', {
    host: 'localhost', 
    dialect: 'postgres',
    //dialectOptions: {connnectTimeout: 10000},
    //pool: {max: 5, min: 0, acquire: 30000, idle: 10000}
});

try {
    await seq.authenticate();
    console.log('Connection has been established successfully.');
} catch (error){
    console.error('Unable to connect to database: ', error);
}