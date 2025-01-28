import React from 'react';
import Image from 'next/image'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className='flex'>
        <Image src="logos/logo.svg" alt="Logo" width={40} height={40} />
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
