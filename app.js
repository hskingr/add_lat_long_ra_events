import mongoose from "mongoose";
import { venueWorker } from "./venueWorker.js";
import "dotenv/config";
import schedule from "node-schedule";

let connectionDataString = "";

const main = async () => {
  try {
    console.log(
      `Attempting Connection to Database with ${connectionDataString}`
    );
    await mongoose.connect(connectionDataString);
    const db = mongoose.connection;
    if (db.readyState === 1) {
      console.log(`Connected to Database`);
      const promiseArray = await venueWorker();
      await Promise.all(promiseArray);
    } else {
      console.log(`Not Connected to Database`);
    }
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
