

import mongoose from "mongoose";

export const connectDB = () =>{
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database is conneted..."))
  .catch(() => console.log("DataBase is not Connected..."));

}