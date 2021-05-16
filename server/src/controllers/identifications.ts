import mongoose from "mongoose";
import Identification from "../models/identification";

export const getIdentifications = async (req: any, res: any) => {
  try {
    const identifications = await Identification.find({ user_id: req.userId });

    res.status(200).json(identifications);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getIdentification = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const identification = await Identification.findById(id);

    res.status(200).json(identification);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createIdentification = async (req: any, res: any) => {
  const identification = req.body;

  const newIdentification = new Identification({ ...identification, user_id: req.userId });

  try {
    await newIdentification.save();

    res.status(201).json(newIdentification);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const patchIdentification = async (req: any, res: any) => {
  const { id } = req.params;
  const updatedIdentification = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No identification with id: ${id}`);

  await Identification.findByIdAndUpdate(id, updatedIdentification, { new: true });

  res.json(updatedIdentification);
};

export const deleteIdentification = async (req: any, res: any) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No identification with id: ${id}`);

  await Identification.findByIdAndRemove(id);

  res.json({ message: "Identification deleted successfully." });
};
