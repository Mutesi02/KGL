const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const signUpSchema = new mongoose.Schema({
  fullName: {
   type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
  },
  branch: {
    type: String,
  }
});

signUpSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model("Signup", signUpSchema);
