const User = require("../models/user");
const UserProfile = require("../models/userProfile");

var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");

exports.signUp = (req, res) => {
  const user = new User(req.body);
  console.log("REQ DATA ", req.body);
  if (req.body.confPassword != req.body.password) {
    return res.status(400).json({ msg: "Password does not match!" });
  }
  user.save((err, user) => {
    if (err) {
      return (
        res
          .status(400)
          // .json({ err: "Unable to save data at this moment!" });
          .json({ err })
      );
    }
    return res.json({
      email: user.email,
      status: "Data saved successfully",
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    /*
             findOne will look for first match in DB with the provided email.
             if match found then it will return that object else it will return an error.
             */
    if (!user) {
      return res.status(400).json({ msg: "User does not exists!" });
    }

    if (!user.authenticate(password)) {
      return res.status(400).json({ msg: "Incorrect email or password!" });
    }

    //generate token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { expire: new Date() + 500 });

    //sending details to front end
    const { email, _id } = user;
    UserProfile.findOne({ regEmail: email }, (err, userProfile) => {
      return res.json({
        token,
        user: { email, _id },
        userProfile,
      });
    });
  });
};

exports.isSignedIn = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["RS256"],
  userProperty: "auth",
});
