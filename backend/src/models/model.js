import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    contactId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);

export default Message;
