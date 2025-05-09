// const mongoose = require('mongoose')
import mongoose from 'mongoose'
// const asynchandler = require('../utilities/AsyncHandler.utils.js')
import asyncHandler from '../utilities/asyncHandler.js'
const createDatabase = asyncHandler(
    async ()=>{
        try {
            const dbInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`)
            console.log(dbInstance.connection.host)
            console.log('db connected')
        } catch (error) {
            console.log(error)
            process.exit(1)
        }
    }
)

// module.exports = createDatabase
export default createDatabase;