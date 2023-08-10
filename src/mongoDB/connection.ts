import mongoose from 'mongoose';

// create mongo connection
export const mongoDBConnection = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
      console.log('MongoDB connected successfully');
    })
    .catch((error) => {
      console.log('Error while mongodb connection: ', error.message);
    });
};

export const disconnectMongo = async () => {
  await mongoose.disconnect();
};
