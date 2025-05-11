// const mongoose = require("mongoose");
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const crypto = require('crypto')

import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "username is required"],
    trim: true,
    maxLength: [50, "name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    unique: true,
    trim: true,
    minLength: [8, "password must be atleast 8 characters long"],
    
  },
  role: {
    type: String,
    // required: true,
    enum: ["seller", "buyer", "admin"],
    default: "buyer",
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
    match: [/^\+?[\d\s-]{12,15}$/, "Please provide a valid phone number"],
  },
  address: {
    street: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true },
    postalCode: { type: String, trim: true },
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// hash the user password 
userSchema.pre('save' , async function(next){
    if(!(this.isModified('password')))return next
    this.password = await bcrypt.hash(this.password , 10)
    return next
})
// COMAPRE THE USER PASSWORD
userSchema.methods.comparePassword = async function(password )
{
  // console.log(password , this.password)
  // console.log(hashedpassword)
    return await bcrypt.compare(password , this.password)
}
// generate access token : token that is given to user after login and it is short lived
userSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id:this._id,
            name:this.name,
            password:this.password,
            role:this.role,
            email:this.email
        },
        process.env.ACCESSTOKEN_SECRET,
        {expiresIn:'24h'}
    )
}
// generate refresh token : token that is for refreshing the access token when it gets expired

userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign(
        {
            _id:this._id,
            name:this.name,
          
        },
        process.env.REFRESHTOKEN_SECRET,
        {expiresIn:'7d'}
    )
}

// generating reset password token 
userSchema.methods.getResetPasswordToken = async function () {
  
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash and add to userSchema
  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

  this.resetPasswordExpire = Date.now()+15*60*1000
  return resetToken;
}
const User = mongoose.model("User", userSchema);
export default User;
