import React from 'react';
import styles from './Credits.module.scss';

const Credits = () => {
  return (
    <section className={styles.container} id='credits'>
      <h1>Kredyty</h1>
      <h6>SERDECZNIE ZAPRASZAMY DO ZAPOZNANIA SIĘ Z NASZĄ OFERTĄ!!!</h6>
      <h6>SZEROKA GAMA PRODUKTÓW BANKOWYCH I POZABANKOWYCH.</h6>
      <div className={styles.columns}>
        <div className={styles.column}>
          <p>
            <b>1. KREDYTY GOTÓWKOWE</b>
            <br />
            - oferta kredytu gotówkowego przygotowana specjalnie dla Ciebie, w
            ofercie mamy rozwiązania, które spełnią Twoje oczekiwania,
            <br />
            - wiele banków w jednym miejscu,
            <br />
            - długi okres kredytowania, max. kwota 200tys .zł.
            <br />
            - potrzebujesz kwotę do 5.000zł, wystarczy oświadczenie o dochodach,
            <br />
            - kwota powyżej 5.000zł zaświadczenie o dochodach,
            <br />- szybka decyzja kredytowa
          </p>
          <p>
            <b>2. KREDYTY DLA GRUP ZAWODOWYCH</b>
            <br />
            - szeroka oferta produktów dla wyznaczonych grup zawodowych:
            adwokaci, lekarze, księgowi, biegły rewident, weterynarz, dentysta,
            doradca podatkowy, notariusz,
            <br />
            - nasz doradca przedstawi wiele rozwiązań, które pozwolą na
            finansowanie Twoich inwestycji i planów związanych z działalnością
            gospodarczą,
            <br />
            - max. kwota 400tys., zł.,
            <br />
            -okres kredytowania do 96m-cy.,
            <br />
            - minimalny okres prowadzenia działalności 24m-ce.,
            <br />
            - analiza zdolności kredytowej klienta oparta na oświadczeniu
            klienta o uzyskiwanych dochodach,
            <br />- możliwość refinansowania kredytu w innym banku,
          </p>
        </div>
        <div className={styles.column}>
          <p>
            <b>3. POŻYCZKI POZABANKOWE</b>
            <br />
            - pierwsza pożyczka darmowa, pożyczasz 2000zł, oddajesz 2000zł.,
            <br />
            - decyzja w 15 minut, nawet do 5.000zł.,
            <br />
            - minimum formalności, wystarczy dowód osobisty i numer rachunku
            bankowego,
            <br />
            - możliwość wprowadzenia wniosku przy jednej rozmowie telefonicznej,
            <br />- możliwość dobrania kwoty pożyczki oraz przedłużenia okresu
            spłaty.
          </p>
          <p>
            <b>4. KREDYTY HIPOTECZNE</b>
            <br />
            - oferta wielu banków przedstawiona przez naszego doradcę pozwoli na
            realizacje Twoich planów,
            <br />
            - pomożemy wybrać Ci odpowiednie rozwiązanie, które spełni Twoje
            oczekiwania,
            <br />
            - kredyt na zakup mieszkania na rynku wtórnym i pierwotnym,
            <br />
            - kredyt na budowę i na zakup domu lub działki,
            <br />
            - długi okres kredytowania, nawet do 40lat,
            <br />
            - maksymalna kwota kredytu uzależniona od wartości zabezpieczenia,
            <br />
            - możliwość łączenia dochodów nie tylko współmałżonków,
            <br />- o niezbędnych dokumentach potrzebnych do złożenia wniosku
            poinformuje Cię nasz doradca.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Credits;
