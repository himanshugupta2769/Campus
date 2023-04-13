import mongoose from "mongoose";
import randToken from "rand-token";

  const schema = new mongoose.Schema({
    name: {
      type: String,
      default: null,
    },
    lastname: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      default: "",
    },
    phone: {
      type: Number,
    },
    role: {
      type: String,
      default: "student",
    },
    branch: {
      type: String,
      default: "",
    },
    reg_id: {
      type: Number,
      default: function () {
        return Math.floor(Math.random() * 10000) + 98563;
      },
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  export const User = mongoose.model("User", schema);