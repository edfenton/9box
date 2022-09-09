const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

  register: (req, res) => {
    console.log("IN REGISTER");
    console.log(req.body);

    const user = new User(req.body);

    user.save()
      .then((newUser) => {
        console.log(newUser);
        console.log("Successfully registered");
        res.json({
          message: "Successfully registered",
          user: newUser
        })
      })
      .catch((err) => {
        console.log("Registration NOT successful");
        res.status(400).json(err);
      }) 

  },

  login: (req, res) => {
    User.findOne({ email: req.body.email })
      .then((userRecord) => {
        if(userRecord === null) {
          res.status(400).json({ message: "Invalid login attempt" })
        } else {
          bcrypt.compare(req.body.password, userRecord.password)
            .then((isPasswordValid) => {
              if (isPasswordValid) {
                console.log("Password is valid");
                res.cookie("usertoken",
                  jwt.sign({
                    user_id: userRecord._id,
                    firstName: userRecord.firstName,
                    email: userRecord.email
                  },
                  process.env.SECRET_KEY),
                  {
                    httpOnly: true,
                    expires: new Date(Date.now() + 86400000)
                  }
                )
                .json({
                  message: "Successfully logged in",
                  userLoggedIn: userRecord.firstName
                })
              } else {
                res.status(400).json({ message: "Invalid login attempt" });
              }
            })
            .catch((err) => {
              console.log("Error with compare pws");
              res.status(400).json({ message: "Invalid login attempt" });
            });
        }
      })
      .catch((err) => {
        console.log("Error with find one");
        res.status(400).json({ message: "Invalid login attempt" });
      });
  },

  logout: (req, res) => {
    console.log("Logging out");
    res.clearCookie("usertoken");
    res.json({
      message: "You have succesfully logged out",
    })
  }

};