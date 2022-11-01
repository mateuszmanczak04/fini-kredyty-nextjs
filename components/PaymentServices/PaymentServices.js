import React from 'react';
import styles from './PaymentServices.module.scss';

const PaymentServices = () => {
  return (
    <section className={styles.container} id='payments'>
      <h1>Usługi Płatnicze</h1>

      <div className={styles.list}>
        <h5>NISKIE OPŁATY!!! ZAPRASZAMY!!! Opłata za rachunek do 500zł</h5>
        <p>- 1.80zł Opłata za rachunek od 500,01zł-1000zł</p>
        <p>- 2.80zł Za każde dodatkowe 500zł</p>
        <p>- 1.40zł REALIZUJEMY WSZYSTKIE WPŁATY:</p>
        <p>- RACHUNKI ZA PRĄD, MIESZKANIE, RATY, ZUS-Y, PODATKI, ITP....</p>
      </div>
    </section>
  );
};

export default PaymentServices;
