import express from "express";
import userRouter from './routes/user.js'
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'

export const app = express();

config({
  path: './data/config.env'
})


app.use(express.json())

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions))

// const whitelist = ["http://localhost:3000/", "http://example2.com"];
// const corsOptions = {
//   credentials: true, // This is important.
//   // origin: (origin, callback) => {
//   //   if(whitelist.includes(origin))
//   //     return callback(null, true)
//   //     callback(new Error('Not allowed by CORS'));
//   // }
// }

// var corsOptions = {
//   origin: ["http://localhost:3000", "https://v2.blockstarz.xyz"],
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   credentials: true,
// };

app.use(cookieParser())

app.use(userRouter)
