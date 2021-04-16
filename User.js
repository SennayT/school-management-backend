const {Model,DataTypes} = require('sequelize')
const {sequelize} = require('./database')
class User extends Model {}

User.init({
    fName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    birthDate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    grade:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    semester:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    term:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    imageAddress:{
        type:DataTypes.STRING,
        allowNull:true
    },
    type:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    sequelize,
})



module.exports = User
