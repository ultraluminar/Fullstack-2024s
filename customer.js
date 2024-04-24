import { Sequelize, DataTypes } from "sequelize";

const seq = new Sequelize('postgres://root:mariadb@postpres:5432/customerdb');

try {
    await seq.authenticate();
    console.log('Connection has been established successfully.');
} catch (error){
    console.error('Unable to connect to database: ', error);
}

