import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullname: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)


// pre hook cause we are encrypting the password before saving it into the database
userSchema.pre("save", async function (next){

    if (!this.modified("password")) return next() // ensures we only encrypt for the password and when we change only it, not everytime any other field in the user model updates

    this.password = bcrypt.hash(this.password, 10)
    next()
})

// we can create our own methods for mongodb ie (findById for a model those kinda stuff) and similarly we can make custom functions for this user model:
 userSchema.methods.isPasswordCorrect = async function (password){
   return await bcrypt.compare(password, this.password)
 }

 userSchema.methods.generateAccessToken = function (){
    // short lived access token
    return jwt.sign({
       _id: this._id,  //  usually only id is enough
       email: this.email, 
       username: this.username,
       fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET, // secret
    {expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
    )
 }

 userSchema.methods.generateRefreshToken = function (){
    // short lived access token
    return jwt.sign({
       _id: this._id,  
    },
    process.env.REFRESH_TOKEN_SECRET, // secret
    {expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
    )
 }

// next is used to pass control for middlewares (the order ig)
export const User = mongoose.model("User", userSchema)