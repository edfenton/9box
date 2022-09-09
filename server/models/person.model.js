const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PersonSchema = new mongoose.Schema({
    name: {
      type: String,
      require: [ true, "Name is required" ],
      minLength: [ 3, "Name must be at least 3 characters long" ],
      maxLength: [ 255, "Name must be at most 255 characters long" ],
      unique: true,
      uniqueCaseInsensitive: true
    },
    // email: {
    //   type: String,
    //   require: [ true, "Email is required" ],
    //   minLength: [ 3, "Email must be at least 3 characters long" ],
    //   maxLength: [ 255, "Email must be at most 255 characters long" ],
    //   validate: {
    //     validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
    //     message: "Please enter a valid email"
    //   },
    //   unique: true
    // },
    area: {
      type: String,
      require: [ true, "Area is required" ],
      enum: {
        values: [ 'Architecture', 'Business Analysis', 'Change Management', 'Data & Integration', 'Development', 'DevOps', 'Leadership', 'Project Management', 'Quality Assurance', 'Support', 'User Experience' ],
        message: "Select an available option"
      }
    },
    level: {
      type: String,
      require: [ true, "Level is required" ],
      enum: {
        values: [ 'Individual Contributor', 'Lead / Supervisor', 'Manager', 'Director', 'Executive' ],
        message: "Select an available option"
      }
    },
    potential: {
      type: String,
      require: [ true, "Potential is required" ],
      enum: {
        values: [ 'Broad', 'Versatile', 'Specialized' ],
        message: "Select an available option"
      }
    },
    performance: {
      type: String,
      require: [ true, "Performance over time is required" ],
      enum: {
        values: [ 'Exceptional', 'Consistent', 'Inconsistent' ],
        message: "Select an available option"
      }
    },
    strengths: {
      type: String,
      maxLength: [ 255, "Strengths must be at most 255 characters long" ]
    },
    opportunities: {
      type: String,
      maxLength: [ 255, "Development opportunities must be at most 255 characters long" ],
    },
    risk: {
      type: String,
      require: [ true, "Flight risk rating is required" ],
      default: "Unrated",
      enum: {
        values: [ 'Unrated', 'Low', 'Medium', 'High' ],
        message: "Select an available option"
      }
    },
    ready: {
      type: String,
      require: [ true, "Readiness rating is required" ],
      default: "Unrated",
      enum: {
        values: [ 'Unrated', 'Now', '1 - 3 Years', '3 - 5 Years', 'Well Placed' ],
        message: "Select an available option"
      }
    }
},{ timestamps: true });

PersonSchema.plugin(uniqueValidator, {
  type: 'mongoose-unique-validator',
  message: 'Team member {PATH} must be unique'
});

module.exports = mongoose.model('Person', PersonSchema);