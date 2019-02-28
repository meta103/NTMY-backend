const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true, default: 'Surname' },
  jobtitle: { type: String, required: true, default: 'Job title' },
  phone: { type: String, required: true, default: 'Phone Number' },
  company: { type: String, required: true, default: 'Company' },
  address: { type: String, required: true, default: 'Address' },
  linkedin: { type: String, required: true, default: 'LinkedIn' },
  contacts: [{
    type: ObjectId,
    ref: "User"
  }],
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });

const User = mongoose.model('User', userSchema);

module.exports = User;