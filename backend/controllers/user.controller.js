import User from "../models/userModel.js";
import asyncHandler from "../utilities/asyncHandler.js";
import sendEmail from "../utilities/sendEmail.js";
// regsiter user
    // --take the user data from body
    // -- check if all the data is given or nothing field is empty
    //  -- then check the validations on the data 
    // -- if valid then check if no user exists before 
    //  -- find the person using email as it should be unique 
    //  if no user exists then create the user using new User(data) 
    // after creating the user generate access token and refresh token for the created user 
    // store the refresh token into the database and access token give to the user
    // after that save the user
    // send the response


    const registerUser = asyncHandler(async(req , res , next)=>{
        // console.log(User.module)
        const data = req.body;
        console.log(data)
        const {name , email ,password   } = data;
        if(!(name || email || password ||role)){
            console.log("here")
            res.status(400).json({message : 'All credentials are required'})
        }
        const isUserExisted = await User.findOne({email:email});
        console.log(isUserExisted)
        if(isUserExisted)return res.status(400).json({message:isUserExisted}) 
        const newUser =  new User(data)
        const savedUser = await newUser.save();
        console.log('saved user is ' , savedUser)
        const accessToken = await savedUser.generateAccessToken()
        const refreshToken = await savedUser.generateRefreshToken();
        savedUser.refreshToken = refreshToken;
        await savedUser.save()

        res.cookie('accessToken',accessToken,{
            httpOnly:false,
            sameSite:'strict',
            secure:true
        }).cookie('refreshToken',refreshToken,{
            httpOnly:true,
            secure:true,
            sameSite:'strict'
        }).status(201).json({
            message:'User Registered successfully!',
            user:savedUser,
            token:accessToken
        })
        
    })
// login user

const LoginUser = asyncHandler(
    async(req , res , next)=>{
        const {email , password} = req.body;
        if(!(email && password))res.status(400).json({
            message:'Email and password are required'
        })
        let user = await User.findOne({email})
        if(!user)res.status(401).json({
            message:'Invalid email or password'
        })
        const isPwdCorrect = await user.comparePassword(password)
        if(!isPwdCorrect)res.status(401).json({message:'Invalid email or password'})
        
            const accessToken  = await user.generateAccessToken()
            const refreshToken = await user.generateRefreshToken()
            user.refreshToken = refreshToken
            user = await user.save()

            res.cookie('accessToken' , accessToken,{
                httpOnly:true,
                secure:true,
                sameSite:'strict'
            }).cookie('refreshToken' , refreshToken,{
                httpOnly:true,
                secure:true,
                sameSite:'strict'
            }).status(201).json({
                message:'successfully logged in'
            })

    }   
)
// logout user


const logoutUser = asyncHandler(
    async(req , res , next)=>{
        const user = await User.findById(req.user?._id)
        if(!user) res.status(401).json({message:'Invalid user'})
        const updatedUser = await User.findByIdAndUpdate(user._id,{
    $set:{
        refreshToken:undefined
    }},
{
    new:true

})
res.clearCookie('accessToken',{
    httpOnly:true,
    secure:true,
    sameSite:'strict'
}).clearCookie('refreshToken',{
    httpOnly:true,
    secure:true,
    sameSite:'strict'
}).json({
    message:'user logged out successfully'
})
    }
)

// view my profile
const viewMyProfile = asyncHandler(
    async(req , res , next)=>{
        const user = await User.findById(req.user?._id);
        if(!user)res.status(400).json({message:'Invalid or unauthorized user'})
        res.status(200).json({user:user})
    }
)
// change password
// reset password
// forgot password

// see all users --- admin

const viewAllUsers = asyncHandler(async(req , res , next)=>{
    const users = await User.find();
    if(!users)res.status(200).json({message:'No user existed'})
    res.status(200).json(users)
})
// see specific user ---admin

const viewAUser = asyncHandler(async(req , res , next)=>{
    const id = req.params?._id;
    const user = await User.findById(id);
    if(!user)res.status(400).json({
        message:'Invalid user'
    })
    res.status(200).json({
        user:user
    })
})


// forgot password 
const forgotPassword = asyncHandler(async(req , res,next)=>{
    const user = await User.findOne({email:req.body.email})

    if(!user)res.status(404).json('User not found')
        // get reset password token
    const resetToken = await user.getResetPasswordToken()
    await user.save({validateBeforeSave:false})


    const resetPasswordUrl = `${req.protocol}://${req.get('host')}/api/v1/user/password/reset/${resetToken}`

    const message = `Your password reset token is: \n \n ${resetPasswordUrl} \n if you  have not requested this email then, please ignore it`

    try {
        await sendEmail({
            email:user.email,
            subject:'pawpal password recovery',
            message,
        })
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`
        })
    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        await user.save({validateBeforeSave:false})
        return res.status(500).json({error:error.message})
    }
})


// update profile
const updateUserProfile = asyncHandler(async(req , res, next)=>{
    const id = req.params.id;
    const data  = req.body;

    const user = await User.findById(id)
    if(!user) return res.status(404).json({message:'User not found'})
    
    const updatedUser = await User.findByIdAndUpdate(id,{
        $set: data
    },
{
    new:true
})
if(!updatedUser)return res.status(404).json({message:'No user found'})

return res.status(201).json({data:updatedUser})
})
// delete profile
const deleteUserProfile = asyncHandler(async(req , res , next)=>{
    const id = req.params.id;
    const user = await User.findById(id)
    if(!user) return res.status(404).json({message:'No user found'})
  const deletedUser =   await User.findByIdAndDelete(id)
    if(!deletedUser)res.status(402).json({message:'Could not find the user'})
   return  res.status(201).json({deletedUser:deletedUser})
})
export {registerUser,LoginUser,logoutUser,viewAUser,viewAllUsers,viewMyProfile , forgotPassword,updateUserProfile,deleteUserProfile}