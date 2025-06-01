// models/Message.ts
import mongoose, { Schema, models } from "mongoose";

const MessageSchema = new Schema({
  sender: String,
  text: String,
  createdAt: { type: Date, default: Date.now },
});

export const Message =
  models.Message || mongoose.model("Message", MessageSchema);
