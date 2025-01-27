'use client'
import React, { useState } from 'react';
import { Contact } from '../models/Contact';
import { updateContact } from '../services/contactService';

interface EditContactModalProps {
  contact: Contact;
  onClose: () => void;
  onContactUpdated: (updatedContact: Contact) => void;
}

const EditContactModal: React.FC<EditContactModalProps> = ({ contact, onClose, onContactUpdated }) => {
  const [formData, setFormData] = useState<Contact>({
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    access: contact.access,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedContact = await updateContact(contact.id, formData);
      onContactUpdated(updatedContact);
      onClose();
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '5px' }}>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Access</label>
          <input
            type="text"
            name="access"
            value={formData.access}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit" style={{ marginRight: '1rem' }}>
            Save
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactModal;
