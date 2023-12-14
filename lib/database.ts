import mongoose from "mongoose";

let isConnected = false; //track the connection status

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "pwc-coop",
    } as mongoose.ConnectOptions);

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log("eeek error", error);
  }
};
