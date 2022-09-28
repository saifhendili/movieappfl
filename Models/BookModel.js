import mongoose from "mongoose";




const reviewSchema= mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:true,
        default:0
    
    },
    comment:{
        type:String,
        require:true,
       
    
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
       ref:"User",
    
    },

})

const bookSchema= mongoose.Schema({
   
  
    title:{
        type:String,
        require:true
    },
    poster:{
        type:String,
        require:true,
       
    },
    author:{
        type:String,
        require:true,
        
    },
    language:{
        type:String,
        require:true,
        
    },
    pdf:{
        type:String,
        require:true,
        
    },
    // reviews:[reviewSchema],
    rating:{
        type:Number,
        require:true,
        default:0
    
    },
    numReviews:{
        type:Number,
        default:0
    
    },
    state:{
        type:Boolean,
        default:false
    
    }
},
{
    timestamps:true
}
)
const Book=mongoose.model("Book",bookSchema)
export default Book;