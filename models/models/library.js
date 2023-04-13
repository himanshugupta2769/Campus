import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  book: {
    type: String,
    default: "",
  },
  bookIssueDate: {
    type: Date,
    default: "",
  },
  bookEndDate: {
    type: Date,
    default: "",
  },
});

export const Library = mongoose.model("Library", schema);