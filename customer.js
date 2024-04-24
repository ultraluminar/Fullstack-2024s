import { Sequelize, DataTypes } from "sequelize";

const seq = new Sequelize('customerdb', 'root', 'mariadb', {
    host: 'localhost', 
});


