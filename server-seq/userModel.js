import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

sequelize.define(
    'User', 
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        dateOfBirth: { type: DataTypes.DATE, allowNull: true }
    }
);

try {
    await sequelize.sync();
    console.log('Successfully synced models with database.');
} catch (error){
    console.error('Unable to sync models: ', error);
}