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
    area: {
      type: String,
      require: [ true, "Area is required" ],
      enum: {
        values: [ 'Architecture', 'Business Analysis', 'Change Management', 'Data & Integration', 'Development', 'DevOps', 'Leadership', 'Project Management', 'Quality Assurance', 'Support', 'User Experience' ],
        message: "Must select an allowed option"
      }
    },
    level: {
      type: String,
      require: [ true, "Level is required" ],
      enum: {
        values: [ 'Individual Contributor', 'Lead / Supervisor', 'Manager', 'Director', 'Executive' ],
        message: "Must select an allowed option"
      }
    },
    potential: {
      type: String,
      require: [ true, "Potential is required" ],
      enum: {
        values: [ 'Broad', 'Versatile', 'Specialized' ],
        message: "Must select an allowed option"
      }
    },
    performance: {
      type: String,
      require: [ true, "Performance over time is required" ],
      enum: {
        values: [ 'Exceptional', 'Consistent', 'Inconsistent' ],
        message: "Must select an allowed option"
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
      enum: {
        values: [ 'Low', 'Medium', 'High' ],
        message: "Must select an allowed option"
      }
    },
    ready: {
      type: String,
      enum: {
        values: [ 'Now', '1 - 3 Years', '3 - 5 Years', 'Well Placed' ],
        message: "Must select an allowed option"
      }
    }
},{ timestamps: true });

PersonSchema.plugin(uniqueValidator, {
  type: 'mongoose-unique-validator',
  message: 'Team member {PATH} must be unique'
});

module.exports = mongoose.model('Person', PersonSchema);