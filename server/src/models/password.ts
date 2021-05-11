import mongoose from 'mongoose';

const passwordSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    email: String,
    password: String,
    url: String
})

const Password = mongoose.model('Password', passwordSchema)

export default Password;