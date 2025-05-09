import Dog from "../models/dogModel.js";
// import asyncHandler from '../utilities/asyncHandler.utils.js'
import asyncHandler from "../utilities/asyncHandler.js";
// admin
const createDog = asyncHandler(async(req , res , next)=>{
    let data = req.body;
    console.log("dog data" , data)

    let dog = await new Dog(data)
    dog = await dog.save()
    return res.status(201).json({
        data:dog
    })
})

// admin and user
const getAllDogs = asyncHandler(async(req , res, next)=>{
    let dogs = await Dog.find();
    if(dogs.length == 0)
       return  res.status(200).json({data:'no data found'})
   return res.status(201).json({
        data:dogs
    })
})

// admin
const updateDog = asyncHandler(async(req , res,next)=>{
    const id = req.params.id;
    let dog = await Dog.findById(id)
    if(!dog) return res.status(500).json({
        message:'Product not found'
    })
    dog = await Dog.findByIdAndUpdate(id , req.body , {new:true})
    res.status(200).json({
        data:dog
    })
})

// admin

const deleteDog = asyncHandler(async(req , res , next)=>{
    const id = req.params.id;
    let dog = await Dog.findById(id)
    if(!dog)res.status(500).json({
        message:'Product not found'
    })
    let deletedDog = await Dog.findByIdAndDelete(id)
    res.status(200).json({
        data:deletedDog
    })
})
const getDogDetails = asyncHandler(async(req , res,next)=>{
    const id = req.params.id;
    let dog = await Dog.findById(id)
    if(!dog)res.status(500).json({
        message:'Product not found'
    })
    res.status(201).json({
        data:dog
    })
})

export {createDog,deleteDog,updateDog,getDogDetails,getAllDogs}