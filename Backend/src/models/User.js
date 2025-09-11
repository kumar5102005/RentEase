import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      zip: { type: String, trim: true },
      country: { type: String, trim: true },
    },
    subscribe: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.methods.verifyPassword = function (passwordPlain) {
  return bcrypt.compare(passwordPlain, this.passwordHash);
};

userSchema.statics.hashPassword = async function (passwordPlain) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(passwordPlain, salt);
};

const User = mongoose.model('User', userSchema);
export default User;


