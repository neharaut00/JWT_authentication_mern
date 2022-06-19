const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    //!as every goal is associated with a user we need to add a user field referencing the user id of User schema
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
