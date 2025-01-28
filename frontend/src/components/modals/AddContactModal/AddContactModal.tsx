import React, { useState } from 'react';
import { Contact } from '@/models/Contact';
import styles from './AddContactModal.module.css'; // Import the CSS module

interface AddContactModalProps {
  onClose: () => void;
  onContactAdded: (newContact: Contact) => void;
}

const AddContactModal: React.FC<AddContactModalProps> = ({ onClose, onContactAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [access, setAccess] = useState(false);

  const handleAdd = () => {
    const newContact: Contact = { id: '', name, email, phone, access: access ? 'Admin' : 'User' };
    onContactAdded(newContact);
    onClose();
  };

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>
          <h2>Add Contact</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className={styles['modal-body']}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Phone:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <label>
            Admin Access:
            <input type="checkbox" checked={access} onChange={(e) => setAccess(e.target.checked)} />
          </label>
        </div>
        <div className={styles['modal-footer']}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleAdd}>Add Contact</button>
        </div>
      </div>
    </div>
  );
};

export default AddContactModal;