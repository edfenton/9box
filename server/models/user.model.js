const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [ 3, "First must be at least 3 characters long" ],
    maxLength: [ 255, "First must be at most 255 characters long" ]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [ 3, "Last must be at least 3 characters long" ],
    maxLength: [ 255, "Last must be at most 255 characters long" ]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    minLength: [ 3, "Email must be at least 3 characters long" ],
    maxLength: [ 255, "Email must be at most 255 characters long" ],
    validate: {
      validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Please enter a valid email"
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    maxLength: [ 32, "Password must be at most 32 characters long"]
  }
}, {timestamps: true});

UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( (value) => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
  console.log("Inside pre-validate");
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Passwords must match');
  }
  next();
});

UserSchema.pre('save', function(next) {
  console.log("Inside pre-save");
  bcrypt.hash(this.password, 10)
    .then((hashedPassword) => {
      this.password = hashedPassword;
      next();
    })
    .catch((err) => {
      console.log("Error while hashing the password")
    });
});

module.exports = mongoose.model('User', UserSchema);