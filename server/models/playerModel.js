import mongoose from "mongoose";


const playerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    statistics: {
      type: Object
    }
  });

  const Player = mongoose.model("player" , playerSchema)

  export default Player