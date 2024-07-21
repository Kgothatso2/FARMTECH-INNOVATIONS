const mongoose = require('mongoose');

// user schema class
const UserSchema = new mongoose.Schema({
  lastname: { type: String },
  firstname: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fields: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Field' }],
  createdAt: { type: Date, default: Date.now }
});

// export class
const User = mongoose.model('User', UserSchema);
module.exports = User;
