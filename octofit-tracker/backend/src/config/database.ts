import mongoose from 'mongoose';

const defaultMongoUri = 'mongodb://127.0.0.1:27017/octofit_db';

export async function connectToDatabase(): Promise<void> {
  const mongoUri = process.env.MONGODB_URI ?? defaultMongoUri;

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(mongoUri);
}

export { defaultMongoUri };