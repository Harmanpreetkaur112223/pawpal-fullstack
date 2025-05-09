// const app = require('./app.js')
// const createDatabase = require('./database/database.js')
import app from './app.js'
import createDatabase from './database/database.js'
createDatabase()
.then(
    ()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`servrer running on port ${process.env.PORT}`)
        })
    }
)
.catch((err)=>{
    console.log(err)
})