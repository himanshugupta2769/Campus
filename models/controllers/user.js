
import mongoose from "mongoose";
import {User} from '../models/user.js'
import {Library} from '../models/library.js'
import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken';
import { sendCookie } from '../utils/feature.js';
import nodemailer from 'nodemailer'

export const getUser = async(req,res) => {
  const role = ["accoutant", "academics", "library"]; 
  const users = await User.find({role});
  const keyword = req.query.keyword;
  console.log(keyword);
  res.json({
    success: true,
    users,
  });
}

export const getStudent = async (req, res) => {
  const role = "student";
  const users = await User.find({ role });
  const keyword = req.query.keyword;
  console.log(keyword);
  res.json({
    success: true,
    users,
  });
};

export const getUserById = async (req, res) => {
   const _id = req.params._id;
   console.log(_id);
  const users = await User.find({ _id });
  res.json({
    success: true,
    users,
  });
};


export const loginUser = async (req,res) => {
  const {email,password} = req.body
  const user = await User.findOne({email}).select("+password")
  // console.log(user.password);
  if(!user)
  return res.status(404).json({
    success : false,
    message : "Invalid Email Or Password..."
  })

  // const isMatch = (password = user.password);

  // console.log(isMatch);


  if (password != user.password)
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password...",
    });

  sendCookie(user, res, `Welcome Back, ${user.name}`, 200)
 
}


export const registerUsers = async (req, res) => {
 const { name, email, age, phone, role, lastname, branch } = req.body;

 const  password = Math.floor(Math.random() * 90000000) + 10000000;
 console.log(password);
   

 let user = await User.findOne({email})

 if(user)
   res.json({
     statusCode: 404,
     success: false,
     message: "User Already Exist",
     user,
   });

 //const hashPassword = await bcrypt.hash(password,10)
 //console.log(hashPassword);



  
user = await User.create({
  name,
  email,
  password,
  age,
  phone,
  role,
  lastname,
  branch,
  // password: user.hashPassword,
});

res.json({
  statusCode: 200,
  success: true,
  user,
});

 //sendCookie(user, res, "Registed Successfully...,", 201);


  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "kumarnitish4383@gmail.com", // generated ethereal user
      pass: "nusgjbfdswwmwoda", // generated ethereal password
    },
  });

  // send mail with defined transport object
  const msg = {
    from: "Campus Crate <CampusCrate@example.com>", // sender address
    to: `${email}`, // list of receivers
    subject: "Login Detail", // Subject line
    text:
      "Your UserName is : " +
      `${email} ` +
      "Your Password is : " +
      `${password} `, // plain text body
  };
  let info = await transporter.sendMail(msg);
  console.log(info);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
    




export const getMyProfile = (req,res) => {
  res.status(200).json({
    success: true,
    user : req.user,
  });
}

export const logoutUser = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
};

export const uesrUpdate = async (req, res) => {
 
    const id = req.body._id;
    console.log(id);

    const update = await User.findByIdAndUpdate(id, req.body);
    res.json({
      status: 200,
      update ,
    });
  
};

export const libraryBook = async (req,res) => {

  const { user_id, book, bookIssueDate, bookEndDate } = req.body;

  // await User.populate(Library, { path: "Library", select: "ref_id" });
  
  console.log(user_id);

  const post = await Library.create({
    user_id,
    book,
    bookIssueDate,
    bookEndDate,
  });
  res.json({
    statuscode: 200,
    post,
  });
}

export const getLibraryBook = async (req,res) => {
  
// const studentObjectId = req.body.user_id;
  // console.log(studentObjectId);
const Users = await User.aggregate([
  {
    $lookup: {
      from: "libraries",
      localField: "_id",
      foreignField: "user_id",
      as: "libraries",
    },
  },
  {
    $project: {
      name: 1,
      email: 1,
      branch: 1,
      libraries: 1
    },
  },
]);

res.json({
  statusCode: 200,
  Users,
});



console.log(Users);

 

  // User.aggregate([
  //   {
  //     // $lookup : ({ from: 'libraries', localField: 'ref_id', foreignField: '_id', as: 'libraries' })
  //     $lookup: {
  //       from: "libraries",
  //       as: "check",
  //       let: { user_id: "$_id" },
  //       pipeline: [{ $match: { $expr: { _id: "$user_id" } } }],
  //     },
  //   },
  // ]).then((err, result, res) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result);
  //   }
  // });

  // res.json({
  //   check,
  // });

  // const Users = await Library.aggregate([
  //   {
  //     $lookup: {
  //       from: "User",
  //       pipeline: [{ $project: { ref_id: User._id } }],
  //       as: "ref_id",
  //     },
  //   },
  // ]);

  // console.log(ref_id);
  // const Detail = await Library.find({ ref_id : User._id });

  
}