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

try {
    await sequelize.authenticate();
    console.log('Successfully connected to database.')
} catch (error){
    console.error('Unable to connect to database: ', error)
}


// MODEL
const User = sequelize.define(
    'User', 
    {
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
    },
    {
        timestamps: false
    }
);


try {
    await sequelize.sync();
    console.log('Successfully synced models with database.');
} catch (error) {
    console.error('Unable to sync models: ', error);
}


function getAll(){
    return User.findAll();
}

function get(id){
    return User.findByPk(id);
}

function add(user_json){
    return User.create(user_json);
}

function remove(id){
    return User.destroy({ "where": { "id": id } });
}

function update(user_json, id){
    return User.update(user_json, { "where": { "id": id } });
}

export { getAll, get, add, remove, update }