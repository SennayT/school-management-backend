const {Student} = require("../db/models");
const bcrypt = require("bcrypt");


const RegisterController = async (req, res) => {

    try {
        const {fName, mName, lName, email, password, birthdate} = req.body
        const imageAddress = "File Here"

        const student = await Student.findAll({
            where: {
                email
            }
        })

        if (student.length !== 0) {
            return res.status(404).json({
                error: "Email is taken"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const newStudent = await Student.create({
            fName,
            mName,
            lName,
            email,
            password: hashedPassword,
            birthdate,
            imageAddress
        })

        const token = await newStudent.generateToken()


        return res.json({
            token,
            data:{
                "firstName":newStudent.fName,
                "middleName":newStudent.mName,
                "lastName": newStudent.lName
            }
        })
    } catch (e) {
        console.error(e)
        return res.status(404).send("Internal Server Error")
    }


}


module.exports = RegisterController