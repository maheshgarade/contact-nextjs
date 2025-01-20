import React from 'react';

const AddContactModal: React.FC = () => {
  return (
    <div>
      <h2>Add Contact</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <button>Save</button>
      </form>
    </div>
  );
};

export default AddContactModal;
