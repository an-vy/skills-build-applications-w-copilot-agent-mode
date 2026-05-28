import mongoose, { Schema } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    durationMinutes: {
      type: Number,
      required: true,
      min: 1,
    },
    focusAreas: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Workout =
  mongoose.models.Workout || mongoose.model('Workout', workoutSchema);

export default Workout;