'use client'
import { Contact } from '@/models/Contact';
import { addContact, deleteContact } from '@/services/contactService';
import React from 'react';
import EditContactModal from '../../modals/EditContactModal/EditContactModal';
import Image from 'next/image'
import AddContactModal from '@/components/modals/AddContactModal/AddContactModal';

interface ContactTableProps {
  contacts: Contact[];
}

const ContactTable: React.FC<ContactTableProps> = ({ contacts: initialContacts }) => {
  const [editingContact, setEditingContact] = React.useState<Contact | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = React.useState<boolean>(false);
  const [contacts, setContacts] = React.useState<Contact[]>(initialContacts);
  

  const handleEditClick = (contact: Contact) => {
    setEditingContact(contact);
  };

  const handleDeleteClick = async (id: string | number) => {
    await deleteContact(id);
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
  }

  const handleModalClose = () => {
    setEditingContact(null);
    setIsAddModalOpen(false);
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleContactAdded = async (newContact: Contact) => {
    await addContact(newContact);
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div>
      <button onClick={handleAddClick}>Add Contact</button>
    <table border={1} style={{ width: '100%', marginTop: '1rem', textAlign: 'left' }}>
      <thead>
        <tr style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)'}}>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Access</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id} style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'left'}}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>{contact.access}</td>
            <td>
            <button 
              onClick={() => handleEditClick(contact)}
              className='mr-5'>
              <Image src="icons/edit.svg" alt="delete icon" width="24" height="24"/>
            </button>
            <button onClick={() => handleDeleteClick(contact.id)}>
              <Image src="icons/delete.svg" alt="delete icon" width="24" height="24"/>
            </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {editingContact && (
        <EditContactModal
          contact={editingContact}
          onClose={handleModalClose}
          onContactUpdated={()=> {}}
          isAddMode={false}
        />
      )}

      {isAddModalOpen && (
        <AddContactModal
          onClose={handleModalClose}
          onContactAdded={handleContactAdded}
        />
      )}
    </div>
  );
};

export default ContactTable;
