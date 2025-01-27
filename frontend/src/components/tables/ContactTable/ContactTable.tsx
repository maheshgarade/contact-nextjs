'use client'
import { Contact } from '@/models/Contact';
import { deleteContact } from '@/services/contactService';
import React from 'react';
import EditContactModal from '../../modals/EditContactModal/EditContactModal';
import Image from 'next/image'

interface ContactTableProps {
  contacts: Contact[];
}

const ContactTable: React.FC<ContactTableProps> = ({ contacts }) => {
  const [editingContact, setEditingContact] = React.useState<Contact | null>(null);

  const handleEditClick = (contact: Contact) => {
    setEditingContact(contact);
  };

  const handleDeleteClick = async (contactId: string) => {
    await deleteContact(contactId);
    // No need to manually update; the table re-renders with updated server-side props.
  };

  const handleModalClose = () => {
    setEditingContact(null);
  };

  return (
    <div>
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
        />
      )}
    </div>
  );
};

export default ContactTable;
