import mongoose from "mongoose";
import { venueWorker } from "./venueWorker.js";
import "dotenv/config";
import schedule from "node-schedule";

let connectionDataString = "";

const main = async () => {
  try {
    await mongoose.connect(connectionDataString);
    const promiseArray = await venueWorker();
    await Promise.all(promiseArray);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Finished`);
    await mongoose.disconnect();
  }
};

if (process.env.NODE_ENV === "development") {
  connectionDataString = process.env.MONGODB_CONNECTION_STRING_DEV;
  main(connectionDataString);
} else if (process.env.NODE_ENV === "production") {
  connectionDataString = process.env.MONGODB_CONNECTION_STRING_PROD;
  main(connectionDataString);
  // schedule.scheduleJob({ hour: 3 }, () => {
  //   main(connectionDataString);
  // });
}
