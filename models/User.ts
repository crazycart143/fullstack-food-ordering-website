const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

interface user {
  email: String;
  password: String;
}
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: (pass: string) => {
      if (!pass?.length || pass.length < 5) {
        new Error("password must be atleast 5 characters");
      }
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.post("validate", function (user: user) {
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassword, salt);
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
