import mongoose from 'mongoose';
import User from '../models/user.js';

export const getUsers = async (req:any, res:any) =>{
    try {
        const users = await User.find();
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getUser = async (req:any, res:any) => {
    const {id} = req.params;

    try {
        const user = await User.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const  createUser = async (req:any, res:any) => {
    
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password })

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const patchUser = async (req:any, res:any) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updatedUser = { name, email, password};

    await User.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
};

export const deleteUser = async (req:any, res:any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
};
