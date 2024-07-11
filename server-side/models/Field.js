const mongoose = require('mongoose');

// field schema class
const FieldSchema = new mongoose.Schema({
  fieldName: { type: String, required: true },
  fieldSize: { type: Number },
  fieldLocation: { type: String, required: true },
  fieldLog: { type: String, required: true },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

// export class
const Field = mongoose.model('Field', FieldSchema);
module.exports = Field;