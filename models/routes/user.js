import express from 'express'
import { User } from "../models/user.js";
import {
  loginUser,
  registerUsers,
  getMyProfile,
  logoutUser,
  getUser,
  getStudent,
  getUserById,
  libraryBook,
  getLibraryBook,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/user", getUser);
router.post("/new", registerUsers);
router.post("/login", loginUser);
router.get("/me",isAuthenticated, getMyProfile);
router.get("/logout", logoutUser);
router.get("/student", getStudent);
router.get("/userById/:_id", getUserById);
router.put("/uesrUpdateData/:_id", async(req,res) => {
   const id = req.params._id;
   console.log(id);

    const update = await User.findByIdAndUpdate(id, req.body);
    res.json({
      status: 200,
      update,
    });
});

router.post("/library", libraryBook);
router.get("/getLibrary", getLibraryBook);



export default router