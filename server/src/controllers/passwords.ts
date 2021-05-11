import mongoose from 'mongoose';
import Password from '../models/password.js';

export const getPasswords = async (req:any, res:any) =>{
    try {
        const passwords = await Password.find({user_id: "aa"});

        res.status(200).json(passwords);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getPassword = async (req:any, res:any) => {
    const {id} = req.params;

    try {
        const password = await Password.findById(id);

        
        res.status(200).json(password);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const  createPassword = async (req:any, res:any) => {
    
    const { user_id, name, username, email, password, url } = req.body;

    const newPassword = new Password({ user_id, name, username, email, password, url })

    try {
        await newPassword.save();

        res.status(201).json(newPassword);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const patchPassword = async (req:any, res:any) => {
    const { id } = req.params;
    const { user_id, name, username, email, password, url } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No password with id: ${id}`);

    const updatedPassword = { user_id, name, username, email, password, url };

    await Password.findByIdAndUpdate(id, updatedPassword, { new: true });

    res.json(updatedPassword);
};

export const deletePassword = async (req:any, res:any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No password with id: ${id}`);

    await Password.findByIdAndRemove(id);

    res.json({ message: "Password deleted successfully." });
};
