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
    function: {
      type: String,
      require: [ true, "Function is required" ],
      enum: [ 'Architecture', 'Business Analysis', 'Change Management', 'Data & Integration', 'Development', 'DevOps', 'Leadership', 'Project Management', 'Quality Assurance', 'Support', 'User Experience' ]
    },
    level: {
      type: String,
      require: [ true, "Level is required" ],
      enum: [ 'Individual Contributor', 'Lead / Supervisor', 'Manager', 'Director', 'Executive' ]
    },
    potential: {
      type: String,
      require: [ true, "Potential is required" ],
      enum: [ 'Broad', 'Versatile', 'Specialized' ]
    },
    performance: {
      type: String,
      require: [ true, "Performance over time is required" ],
      enum: [ 'Exceptional', 'Consistent', 'Inconsistent' ]
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
      enum: [ 'Low', 'Medium', 'High' ]
    },
    ready: {
      type: String,
      enum: [ 'Now', '1 - 3 Years', '3 - 5 Years', 'Well Placed' ]
    }
},{ timestamps: true });

PersonSchema.plugin(uniqueValidator, {
  type: 'mongoose-unique-validator',
  message: '{PATH} must be unique'
});

module.exports = mongoose.model('Person', PersonSchema);