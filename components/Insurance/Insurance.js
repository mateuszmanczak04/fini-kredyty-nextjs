import React from 'react';
import styles from './Insurance.module.scss';

const Insurance = () => {
  return (
    <section className={styles.container} id='insurance'>
      <h1>Ubezpieczenia</h1>
      <div className={styles.list}>
        <h5>Ubezpieczenia samochodów</h5>
        <p>- OC</p>
        <p>- AC</p>
        <p>- NW</p>
      </div>
    </section>
  );
};

export default Insurance;
