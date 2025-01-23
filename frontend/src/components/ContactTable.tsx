import { Contact } from '@/models/Contact';
import React from 'react';

interface ContactTableProps {
  contacts: Contact[];
}

const ContactTable: React.FC<ContactTableProps> = ({ contacts }) => {

  return (
    <table border={1} style={{ width: '100%', marginTop: '1rem' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Access</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>{contact.access}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
