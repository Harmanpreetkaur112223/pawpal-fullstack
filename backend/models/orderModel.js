// const mongoose = require('mongoose')
import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    orderedItems:[
    {
        dog_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Dog",
            required:true
        },
        name:{
            type:String,
            required:true,
            trim:true
        },
        price:{
            type:Number,
            // required:true
        },
        quantity:{
            type:Number,
            required:true,
            default:'0'
        }
    }
    ],
   
    shippingInfo:{
        state:{type:String,required:true,trim:true},
        district:{type:String,required:true,trim:true},
        city:{type:String,required:true,trim:true},
        street:{type:String,required:true,trim:true},
        pincode:{type:String , required:true}
    },
    paymentInfo:{
        paymentMethod:{
            type:String,
            required:true,
            trim:true
        }, 
        status: {
            type: String,
            enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
            default: 'pending'
          },
          paymentStatus: {
            type: Boolean,
            default: false
          },
    },
   
    taxPrice:{
        type:Number,
        required:true
    },
    shippingPrice:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number
    },
   
      
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
})


const Order = mongoose.model('Order',orderSchema)

export default Order