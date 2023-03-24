const mongoose = require('mongoose');

const sprintSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      default:Date.now
    },
    endDate: {
      type: Date
    },
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
      }
    ]
  });
   
  const Sprint = mongoose.model('Sprint', sprintSchema);

  module.exports=Sprint