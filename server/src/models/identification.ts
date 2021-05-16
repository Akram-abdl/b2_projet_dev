import mongoose from "mongoose";

interface IIdentification extends mongoose.Document {
  user_id: mongoose.Schema.Types.ObjectId;
  site: String;
  username: String;
  email: String;
  password: String;
  url: String;
}

const identificationSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  site: { type: String, required: true },
  username: String,
  email: String,
  password: { type: String, required: true },
  url: String,
});

export default mongoose.model<IIdentification>("Identification", identificationSchema);
