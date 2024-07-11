const mongoose = require('mongoose');

// user schema class
const UserSchema = new mongoose.Schema({
  usedId: { type: mongoose.Schema.Types.ObjectId, required: true },
  fullname: { type: String },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fields: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Field' }],
  createdAt: { type: Date, default: Date.now }
});

// export class
const User = mongoose.model('User', UserSchema);
module.exports = User;
