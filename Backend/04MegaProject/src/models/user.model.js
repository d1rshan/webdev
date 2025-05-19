import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trime: true,
        index: true,
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
            ref: "Video",
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    refreshtoken: {
        type: String,
    }
}, {
    timestamps: true
})

// for encrypting password, pre -> for doing this before saving into the MongoDb
userSchema.pre("save", async function (next) {
    if (this.isModified("password")){
        this.password = bcrypt.hash(this.password,10)
        next()
    }
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}
export const User = mongoose.model("User",userSchema)