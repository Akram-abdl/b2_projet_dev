import mongoose from 'mongoose';

interface IUser extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: String
})

export default mongoose.model<IUser>('User', userSchema);
