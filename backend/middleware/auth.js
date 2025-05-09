const asyncHandler = require('../utilities/AsyncHandler.utils.js')
const jwt = require('jsonwebtoken')
const User = require('../models/User.model.js')
exports.isAuthenticated = asyncHandler(async(req , res , next)=>{
    const token = req.cookies?.refreshToken || req.headers.authorization.split(' ')[1]
    if(!token) res.status(401).json('Unauthorized user')
    let decodedData = await jwt.verify(token,process.env.REFRESHTOKEN_SECRET)
    if(!decodedData) res.status(401).json({message:'Invalid token'})
    const user = await User.findById(decodedData._id)
    if(!user) res.status(401).json({message:'Invalid token'})
    req.user = user;
    next();

})

exports.checkAdmin = asyncHandler((...roles)=>{
    return async(req , res , next)=>{
        if(!roles.includes(req.user.role))
        {
            res.status(403).json({
                message:` Role ${req.user.role} is not allowed to access this resource`
            })
        }
        next()
    }
})