import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(
    process.env.POSTGRES_DB, 
    process.env.POSTGRES_USER, 
    process.env.POSTGRES_PASSWORD, 
    {
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST
    }
);

// MODEL
const User = sequelize.define(
    'User', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }
);


try {
    await sequelize.sync();
    console.log('Successfully synced models with database.');
} catch (error) {
    console.error('Unable to sync models: ', error);
}


export { User }