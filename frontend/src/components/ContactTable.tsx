import React from 'react';

const ContactTable: React.FC = () => {
  const contacts = [
    { id: 1, name: 'John Doe', phone: '1234567890', email: 'john@example.com', access: 'Admin' },
    { id: 2, name: 'Jane Doe', phone: '0987654321', email: 'jane@example.com', access: 'User' },
  ];

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
