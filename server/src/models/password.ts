import mongoose from 'mongoose';

interface IPassword extends mongoose.Document {
    user_id: mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    email: String,
    password: String,
    url: String
  } 


const passwordSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    username: String,
    email: String,
    password: {type: String, required: true},
    url: String
})

export default mongoose.model('Password', passwordSchema);