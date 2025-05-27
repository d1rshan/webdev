import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/createToken.js";

const createUser = asyncHandler(async (req,res) => {
    const {username,email,password} = req.body // destructure
    
    if (!username || !email || !password){
        throw new Error("Please fill all the inputs.")
    }

    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400).send("User already exists")
        return
    } 

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    
    const newUser = new User({username,email,password:hashedPassword})

    try {
        await newUser.save()
        generateToken(res,newUser._id)
        res.status(201).json(newUser)
    } catch (error) {
        throw new Error("Invalid user data")
         
    }
})


const loginUser = asyncHandler(async (req,res) => {
    const {email,password} = req.body
    const exisitingUser = await User.findOne({email})

    if (exisitingUser){
        const isPasswordValid = await bcrypt.compare(password,exisitingUser.password)
        
        if(isPasswordValid){
            generateToken(res,exisitingUser._id)
            res.status(201).json(exisitingUser)
            return
        }
    }
})

const logoutCurrentUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httyOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const getCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); 
  /* doubt -> without passing anything to request body in postman this is working ie only when we login to any user
   and cookie is set then it is working but howw??
  ->  ohhh cause we used the authenticate middleware which decodes the jwt cookie and sets req.user
   */

  if (user){
    res.json(user)
  } else{
    res.status(404)
    throw new Error("User not found")
  }
});

const updateCurrentUserProfile = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id)

    if (user){
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email

        if (req.body.password){
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password,salt)
            user.password = hashedPassword
        }

        const updatedUser = await user.save()

        res.json(updatedUser)
    } else{
        res.status(404)
        throw new Error("User not found")
    }
})

const deleteUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id); 
  // for admin routes we are getting user from params and req.user now after authenticate middleware will have admin details

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error("Cannot delete admin user");
    }

    await User.deleteOne({ _id: user._id });
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found.");
  }
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const updateUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});


export {createUser,loginUser, logoutCurrentUser,getAllUsers,getCurrentUserProfile,updateCurrentUserProfile, deleteUserById, getUserById, updateUserById}