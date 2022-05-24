import mongoose from "mongoose";
import { venueWorker } from "./venueWorker.js";
import "dotenv/config";

if (process.env.NODE_ENV === "development") {
  const main = async () => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/ra_data");
      await venueWorker();
    } catch (error) {
      console.log(error);
    }
  };
  main();
}
