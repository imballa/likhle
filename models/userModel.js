let mongoose = require('mongoose')

let userSchema = mongoose.Schema(
  {
    // these fields are from ldap
    username: { type: String},
    password: { type: String}
  },
  {
    timestamps: true
  }
)
// Create a model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;