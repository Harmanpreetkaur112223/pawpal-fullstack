
import mongoose from "mongoose"


const DogSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    breed:{
        type:String , 
        required:[true , 'breed of Dog is required'],
        trim : true
    },
    description:{
        type:String , 
        required:[true , 'description is required'],

    },
    age:{
        type:Number ,
        required:[true , 'age is required'],
        default:1,
        min:[0 , "age should be greater than zero or can't be negative"]
    },
    weight:{
        type : Number , 
        required:[true , 'weight is required for the Dog'],
        default:1,
        min:[0 , 'The weight cannot be negative']
    },
    likings:{
        type:String , 
        
    },
    gender:{
        type:String , 
        required:true , 
        enum :['male'   ,'female' ,'others']
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',

    },
    price:{
        type:Number, 
        min:[0 , 'price cannot be negative'],
        default:0,
        required:[true , 'price is required']
    },
    images:[{
        public_id:{
            type:String,
            // required:true
        },
        url:{
            type:String,
            // required:true
        }
    }],
    stock:{
        type:Number,
        required:true,
        default:1
    },
    numOfRev:{
        type:Number,
        default:0
    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number
        },
        comment:{
            type:String,
            required:true
        }
    }],
    vaccinated:{
        type:Boolean , 
        default:false
    },
    medicalHistory:[
        {
            date:{type:Date , default:Date.now},
            description:{type:String , required:true , trim : true}
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})


const Dog = mongoose.model('Dog' , DogSchema)
export default Dog