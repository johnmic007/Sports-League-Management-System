import mongoose  from "mongoose";

import { Schema } from "mongoose";

const teamSchema = new Schema({
    name :{
        type: String
    },
    coach :{
        type: String
    },
    players : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],
})

const Team = mongoose,model( "Teams" , teamSchema )

export default Team