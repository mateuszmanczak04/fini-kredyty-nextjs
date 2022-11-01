import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h1>O Firmie</h1>
      <p>
        Serdecznie zapraszamy do naszej siedziby mieszczącej się przy ulicy
        Powstańców Styczniowych 2 w Koninie, która została specjalnie stworzona
        z myślą dla wymagających klientów, którzy chcą szerzej spojrzeć na swoje
        finanse.
        <br />
        <br />
        Nasza oferta jest skierowana do osób które potrzebują taniego kredytu. W
        naszej ofercie znajdziecie Państwo kredyt hipoteczny, mieszkaniowy,
        refinansowy, gotówkowy oraz tani kredyt gotówkowy.
        <br />
        <br />
        W komfortowych, zapewniających maksymalną dyskrecję warunkach, mogą
        Państwo skorzystać z pomocy naszego doświadczonego doradcy finansowego,
        który zapewni Państwu najwyższy poziom obsługi, dostosowany do
        indywidualnych potrzeb i wykraczający poza tradycyjny zakres.
        <br />
        <br />
        Korzystając z ofert większości banków nasz doradca pomoże Państwu wybrać
        kredyt dostosowany do Państwa potrzeb i załatwi niezbędne formalności.
        Nasze doradztwo kredytowe jest całkowicie bezpłatną usługą. Dzięki nam
        zaoszczędzisz nie tylko pieniądze, ale i cenny czas.
        <br />
        <br />
        Wiedzę oraz umiejętności naszego doradcy potwierdza udział w licznego
        rodzaju szkoleniach co potwierdzają liczne certyfikaty.
      </p>
    </section>
  );
};

export default About;
