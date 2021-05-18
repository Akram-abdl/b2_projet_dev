import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  passphrase: string;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passphrase: { type: String, required: true, unique: true },
});

export default mongoose.model<IUser>("User", userSchema);
