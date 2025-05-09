// import asyncHandler from "../utilities/asyncHandler.utils.js";
import asyncHandler from '../utilities/asyncHandler.js';
import Order from '../models/orderModel.js'
import User from '../models/userModel.js'

// create the order
const createOrder = asyncHandler(async (req, res, next) => {
  const {
    shippingInfo,
    orderedItems,
    paymentInfo,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await new Order({ shippingInfo,
    orderedItems,
    paymentInfo,
    taxPrice,
    shippingPrice,
    totalPrice})

    if(!order)res.status(400).json({message:'could not create the order'})
    res.staus(201).json({message:'Order created successfully',order:order})
});

//  read my order
const getMyOrderDetails = asyncHandler(async(req , res,next)=>{
    const id = req.user.id;
    const user = await User.findById(id)
    if(!user) res.status(404).json({message:'No user found'})
    const order = await Order.find({user:id})
    if(!order) res.status(400).json({message:'No order found'})
    res.status(201).json({order,})
})

// get all the orders details for admin
const getAllOrderDetails = asyncHandler(async(req , res,next)=>{
    const orders = await Order.find();
    if(!orders)res.status(201).json({message:'No order available till now'})
    res.status(201).json({orders,})
})

// update the order
const updateAOrder = asyncHandler(async(req , res,next)=>{
    const data = req.body;
    const id = req.params.id;
    const order = await Order.findById(id)
    if(!order)res.status(400).json({message:'could not find the order'})
    const updatedOrder = await Order.findByIdAndUpdate(id,{$set:data},{new:true})
    res.status(400).json({updatedOrder})
})

// delete an order

const deleteAnOrder = asyncHandler(async(req , res,next)=>{
    const id = req.params.id;
    const order = await Order.findById(id)
    if(!order)res.status(400).json({message:'No data found for this order'})
    const deletedOrder = await Order.findByIdAndDelete(id)
    res.status(201).json({deletedOrder,message:'Order deleted successfully'})
})


// update order status -- admin
const updateOrderStatus = asyncHandler(async(req , res,next)=>{
    const order = await Order.findById(req.params.id)
    if(!order)res.status(400).json({message:'could not find the order'})
    if(order.paymentInfo.status === 'Delievered')
        return res.status(400).json({message:'You have already delievered this order'})
})

export {createOrder,deleteAnOrder,getMyOrderDetails,getAllOrderDetails,updateAOrder,updateOrderStatus}