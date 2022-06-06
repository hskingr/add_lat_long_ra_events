import mongoose from "mongoose";
import { venueWorker } from "./venueWorker.js";
import "dotenv/config";

if (process.env.NODE_ENV === "development") {
  connectionDataString = process.env.MONGODB_CONNECTION_STRING_DEV;
} else if (process.env.NODE_ENV === "production") {
  connectionDataString = process.env.MONGODB_CONNECTION_STRING_PROD;
}

if (process.env.NODE_ENV === "development") {
  const main = async () => {
    try {
      await mongoose.connect(connectionDataString);
      const promiseArray = await venueWorker();
      await Promise.all(promiseArray);
      await mongoose.disconnect();
    } catch (error) {
      console.log(error);
    }
  };
  main();
}
