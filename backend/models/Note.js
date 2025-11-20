import mongoose from "mongoose";

//create a shema 
//model based off that schema

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required : true
    },
    content:{
        type:String,
        required : true
    }
    
}, {timestamp:true} );
 
const Note = mongoose.model("Note" , noteSchema);

export default Note; 