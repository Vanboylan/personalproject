const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicationSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    result: {
      type: String,
    },
    comments: {
      type: String,
    },
    user: {
      type: ObjectId,
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;
