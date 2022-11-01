import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.container} id='contact'>
      <h1>Kontakt</h1>
      <p className={styles.address}>
        ul. Powstańców Styczniowych 2 61-510 Konin <br />
        Telefon: +48 63/242 46 35 <br />
        GSM: +49 663 361 777 <br />
        E-mail: fini1@wp.pl
      </p>
      <div className={styles.form}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <label>
              <p>Imię i nazwisko</p>
              <input type='text' />
            </label>
            <label>
              <p>E-mail</p>
              <input type='email' />
            </label>
            <label>
              <p>Numer telefonu</p>
              <input type='number' />
            </label>
          </div>
          <div className={styles.column}>
            <label>
              <p>Twoja wiadomość</p>
              <textarea></textarea>
            </label>
          </div>
        </div>
        <button>Wyślij</button>
      </div>
    </section>
  );
};

export default Contact;
