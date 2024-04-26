import { Sequelize } from 'sequelize';


const sequelize = new Sequelize(
    process.env.POSTGRES_DB, 
    process.env.POSTGRES_USER, 
    process.env.POSTGRES_PASSWORD, 
    {
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST
    }
);


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch(error){
    console.error('Unable to connect to database: ', error);
}


export { sequelize }