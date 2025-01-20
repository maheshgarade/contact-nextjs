// frontend/src/services/contactService.ts
import axios from "axios";
import { Contact } from "../models/Contact";

const BASE_URL = "http://localhost:5000/api/contacts";

export const getContacts = async (): Promise<Contact[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addContact = async (contact: Contact): Promise<Contact> => {
  const response = await axios.post(BASE_URL, contact);
  return response.data;
};

export const updateContact = async (
  id: string,
  contact: Contact
): Promise<Contact> => {
  const response = await axios.put(`${BASE_URL}/${id}`, contact);
  return response.data;
};

export const deleteContact = async (id: string): Promise<void> => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
