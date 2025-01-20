import { Request, Response } from "express";
import Contact from "../models/contact";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addContact = async (req: Request, res: Response) => {
  try {
    const { name, phone, email, access } = req.body;
    const newContact = new Contact({ name, phone, email, access });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedContact);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
