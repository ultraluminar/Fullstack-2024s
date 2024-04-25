import { Sequelize } from 'sequelize';


const sequelize = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        dialect: 'postgres',
        host: process.env.DB_HOST
    }
);


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch(error){
    console.error('Unable to connect to database: ', error);
}


export { sequelize }