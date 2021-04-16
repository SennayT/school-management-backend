
const {sequelize} = require('./database');
const User = require('./User');

(async ()=>{
    try{
        await sequelize.sync({
            force:true
        })
    }
    catch (err) {
        console.error(err)
    }
})()
