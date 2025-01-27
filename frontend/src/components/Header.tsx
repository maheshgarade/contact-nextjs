import React from 'react';
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'oklch(0.278 0.033 256.848)', color: 'white' }}>
      <div className='flex'>
        <Image src="logos/logo.svg" alt="Logo" width={34} height={34} />
        <span style={{ marginLeft: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Contact Manager</span>
      </div>
      <div>
        <input type="text" placeholder="Search..." style={{ marginRight: '1rem' }} />
        <button>
          <Image src="icons/login.svg" alt="Login person image" width={34} height={34} />
        </button>
      </div>
    </header>
  );
};

export default Header;
