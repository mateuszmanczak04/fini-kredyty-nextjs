import React from 'react';
import styles from './Map.module.scss';

const Map = () => {
  return (
    <section className={styles.container}>
      <h1>Tutaj nas znajdziesz</h1>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7815354042077!2d18.24748471579667!3d52.22918677976015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b36ab21b289a5%3A0x7fe1195afa0aaa14!2sPowsta%C5%84c%C3%B3w%20Styczniowych%202%2C%2062-500%20Konin!5e0!3m2!1spl!2spl!4v1667226813240!5m2!1spl!2spl'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'></iframe>
    </section>
  );
};

export default Map;
