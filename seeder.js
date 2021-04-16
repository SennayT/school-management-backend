const {sequelize} = require('./database')
const faker = require('')

const connect = async ()=>{
    await sequelize.sync({
        force:true
    })
    console.log('connected')




}

connect()
    .then(()=>{})
    .catch(err=>{
        console.error(err)
    })
