
const {sequelize} = require('./database');
//const User = require('./User');

const {Model,DataTypes} = require('sequelize');

const faker = require('faker');

class GradeLevel extends Model{}

GradeLevel.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    timestamps:false
})

class ClassRoom extends Model{}

ClassRoom.init({
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        timestamps:false
    });

GradeLevel.hasMany(ClassRoom)

class Subject extends Model{}

Subject.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, {
    sequelize,
    timestamps:false
})
GradeLevel.hasMany(Subject)

class Semester extends Model{}

Semester.init({
    value:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize,
    timestamps:false
})

class Student extends Model{}

Student.init({
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
    imageAddress:{
        type:DataTypes.STRING,
        allowNull:true
    },
},{
    sequelize,
})

GradeLevel.hasMany(Student)
Semester.hasMany(Student)
ClassRoom.hasMany(Student)


class Score extends Model{}

Score.init({
    score:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    year:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize,
    timestamps:false
})

Student.hasMany(Score)
GradeLevel.hasMany(Score)
Semester.hasMany(Score)
Subject.hasMany(Score)

const connect = async ()=>{
    await sequelize.sync({
        //force:true
    })
    // console.log('connected')
    //
    // const  classes = await ClassRoom.findAll()
    //
    // c.forEach(item=>{
    //     console.log(item.name)
    // })

    const student = new Student();

    student.fName = "sennay"
    console.log(student)
   // await student.save()



}

connect()
    .then(()=>{})
    .catch(err=>{
        console.error(err)
    })
