import React from 'react';
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#FF66F9' }}>
      <div>
        <Image src="logos/logo-sm.svg" alt="Logo" width={34} height={34} />
        <span style={{ marginLeft: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Contact Manager</span>
      </div>
      <div>
        <input type="text" placeholder="Search..." style={{ marginRight: '1rem' }} />
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
