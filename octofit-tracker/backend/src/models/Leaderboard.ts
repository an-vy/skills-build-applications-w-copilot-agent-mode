import mongoose, { Schema } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ['student', 'team'],
      default: 'student',
    },
    score: {
      type: Number,
      required: true,
      min: 0,
    },
    rank: {
      type: Number,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Leaderboard =
  mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);

export default Leaderboard;