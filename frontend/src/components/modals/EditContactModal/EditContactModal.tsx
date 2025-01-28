import React, { useState } from 'react';
import { Contact } from '@/models/Contact';
import styles from './EditContactModal.module.css'; // Import the CSS module

interface EditContactModalProps {
  contact: Contact | null;
  onClose: () => void;
  onContactUpdated: (updatedContact: Contact) => void;
  isAddMode: boolean;
}

const EditContactModal: React.FC<EditContactModalProps> = ({ contact, onClose, onContactUpdated, isAddMode }) => {
  const [name, setName] = useState(contact?.name || '');
  const [email, setEmail] = useState(contact?.email || '');
  const [phone, setPhone] = useState(contact?.phone || '');
  const [access, setAccess] = useState(contact?.access || false);

  const handleSave = () => {
    const updatedContact = { ...contact, name, email, phone, access };
    onContactUpdated(updatedContact as Contact);
    onClose();
  };

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>
          <h2>{isAddMode ? 'Add Contact' : 'Edit Contact'}</h2>
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
            <input type="checkbox" checked={access as boolean} onChange={(e) => setAccess(e.target.checked)} />
          </label>
        </div>
        <div className={styles['modal-footer']}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>{isAddMode ? 'Add Contact' : 'Save Changes'}</button>
        </div>
      </div>
    </div>
  );
};

export default EditContactModal;