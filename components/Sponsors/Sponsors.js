import React from 'react';
import styles from './Sponsors.module.scss';

const Sponsors = () => {
  return (
    <section className={styles.container}>
      <h1>Sponsorzy</h1>
      <div className={styles.list}>
        <img src='sponsor1.png' alt='sponsor1' />
        <img src='sponsor2.png' alt='sponsor2' />
        <img src='sponsor3.png' alt='sponsor3' />
        <img src='sponsor4.jpg' alt='sponsor4' />
        <img src='sponsor5.png' alt='sponsor5' />
        <img src='sponsor6.png' alt='sponsor6' />
        <img src='sponsor7.png' alt='sponsor7' />
      </div>
    </section>
  );
};

export default Sponsors;
