import { Request, Response } from "express";

// In-memory storage for contacts
let contacts: any[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "1234567890",
    email: "john@example.com",
    access: "Admin",
  },
  {
    id: 2,
    name: "Jane Doe",
    phone: "0987654321",
    email: "jane@example.com",
    access: "User",
  },
];

export const getContacts = (req: Request, res: Response) => {
  res.status(200).json(contacts);
};

export const addContact = (req: Request, res: Response) => {
  const { name, phone, email, access } = req.body;
  const newContact = { id: Date.now().toString(), name, phone, email, access };
  contacts.push(newContact);
  res.status(201).json(newContact);
};

export const updateContact = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, phone, email, access } = req.body;
  const contactIndex = contacts.findIndex((contact) => contact.id === id);

  if (contactIndex !== -1) {
    contacts[contactIndex] = { id, name, phone, email, access };
    res.status(200).json(contacts[contactIndex]);
  } else {
    res.status(404).json({ error: "Contact not found" });
  }
};

export const deleteContact = (req: Request, res: Response) => {
  const { id } = req.params;
  const contactIndex = contacts.findIndex((contact) => contact.id === id);

  if (contactIndex !== -1) {
    contacts.splice(contactIndex, 1);
    res.status(200).json({ message: "Contact deleted successfully" });
  } else {
    res.status(404).json({ error: "Contact not found" });
  }
};
