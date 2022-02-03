const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

var userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password; // _ is used to store private variable
    // password variable is storing a plain password here
    this.salt = uuidv4();
    this.encry_password = this.securePassword(password); // securepassword method will return encrypted password and we are storing that in our DB
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  securePassword: function (plainPassword) {
    if (!plainPassword) return ""; //cmnt 1 - If user will enter empty password it will return blank string to mongoDB and as password field is set as "required" , so mongoDb will not accept the blank text and wil throw an error
    try {
      const hash = crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");
      return hash;
    } catch (err) {
      return ""; // Refer to cmnt 1 for details on returning blank string
    }
  },

  authenticate: function (plainPassword) {
    return this.securePassword(plainPassword) === this.encry_password;
  },
};

module.exports = mongoose.model("User", userSchema);
