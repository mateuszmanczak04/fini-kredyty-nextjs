import React from 'react';
import styles from './Welcome.module.scss';

const Welcome = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.container} id='home'>
      <h1>Witamy na stronie firmy</h1>
      <div className={styles.services}>
        <h4 onClick={() => handleScroll('credits')}>Kredyty</h4>
        <h4 onClick={() => handleScroll('payments')}>Płatności</h4>
        <h4 onClick={() => handleScroll('insurance')}>Ubezpieczenia</h4>
      </div>
      <p className={styles.address}>
        UL. Powstańców Styczniowych 2 62-510 Konin
        <br />
        TEL. 63/242 46 45
        <br />
        GSM: +48 663 361 777
      </p>
    </section>
  );
};

export default Welcome;
