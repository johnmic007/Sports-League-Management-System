import mongoose from "mongoose";


const  {Schema} = mongoose;


const userSchema = new Schema({
    firstName: {
        type: String,
        required: [ true , "Firest naem is required"]
    },
    lastName :{
        type: String ,
        required : [ true , " Last name is required "]
    },
    email:{
        type:String,
        required: [ true , "Email is required "]
    },
    password: {
        type: String,
        required : [ true , "Password is required "]
    },

})

const Users =mongoose.model("Users", userSchema)

export default Users