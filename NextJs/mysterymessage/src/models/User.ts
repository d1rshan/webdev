import mongoose, {Schema, Document} from "mongoose";

// Document is used for typescript only
export interface Message extends Document{
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingmessage: boolean;
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true,"Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true,
        match: [/.+\@.+\..+/,'Please use a valid email address'], // regex to validate email
    },
    password: {
        type: String,
        required: [true,"Password is required"]
    },
    verifyCode: {
        type: String,
        required: [true,"Verify code is required"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify code expiry is required"]
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingmessage: {
        type: Boolean,
    },
    messages: [MessageSchema] // this will store the messages itself not just ids
    // messages: [ // this is same as above but if u use above way u can reuse MessageSchema everywhere else
    //         {
    //             content: { type: String, required: true },
    //             createdAt: { type: Date, required: true, default: Date.now }
    //         }
    // ]

    // messages: [ // this only store object ids of messages and we have to use populate() to populate messages before fetching them
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Message'
    //     }
    // ]
})

// different way to export in nextjs than in react but why?
// 

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)
// the as part is written for typescript ig

export default UserModel

// The same thing in js would be this:
/*
import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, 'Please use a valid email address']
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  verifyCode: {
    type: String,
    required: [true, "Verify code is required"]
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify code expiry is required"]
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAcceptingmessage: {
    type: Boolean,
    default: true
  },
  messages: [MessageSchema]
});

// Avoid re-defining the model during hot reload
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;

 */