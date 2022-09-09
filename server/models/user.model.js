const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [ 3, "First must be at least 3 characters long" ],
    maxLength: [ 255, "First must be at most 255 characters long" ],
    unique: true
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
    }
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    maxLength: [ 32, "Password must be at most 32 characters long"]
  }
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {
  type: 'mongoose-unique-validator',
  message: 'Team member {PATH} must be unique'
});

UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Passwords must match');
  }
  next();
});

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

module.exports = mongoose.model('Person', PersonSchema);