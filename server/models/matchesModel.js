import mongoose from "mongoose";





const matchSchema = new mongoose.Schema({
    teams: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    }],
    date: {
      type: Date,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    score: {
      homeTeam: {
        type: Number,
        required: true
      },
      awayTeam: {
        type: Number,
        required: true
      }
    }
  });

  const Matches = mongoose.model("Matches" , matchSchema )

  export default Matches