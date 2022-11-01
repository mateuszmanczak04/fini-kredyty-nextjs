import React, { useState } from 'react';
import styles from './Header.module.scss';
import { GrMenu } from 'react-icons/gr';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <h4 className='logo' onClick={() => handleScroll('home')}>
        FINI
      </h4>
      <button onClick={toggleMenuOpen}>
        <GrMenu />
      </button>
      <div className={`${styles.navigation} ${isMenuOpen && styles.open}`}>
        <button onClick={toggleMenuOpen}>
          <GrMenu />
        </button>
        <h6 onClick={() => handleScroll('home')}>Strona główna</h6>
        <h6 onClick={() => handleScroll('about')}>O Firmie</h6>
        <h6 onClick={() => handleScroll('credits')}>Nasza Oferta</h6>
        <h6 onClick={() => handleScroll('contact')}>Kontakt</h6>
      </div>
      <div
        className={`${styles.backdrop} ${isMenuOpen && styles.open}`}
        onClick={toggleMenuOpen}></div>
    </div>
  );
};

export default Header;
