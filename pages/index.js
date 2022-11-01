import Head from 'next/head';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Credits from '../components/Credits/Credits';
import Header from '../components/Header/Header';
import Insurance from '../components/Insurance/Insurance';
import Map from '../components/Map/Map';
import PaymentServices from '../components/PaymentServices/PaymentServices';
import Privacy from '../components/Privacy/Privacy';
import Sponsors from '../components/Sponsors/Sponsors';
import Welcome from '../components/Welcome/Welcome';

export default function Home() {
  return (
    <div className='body'>
      <Head>
        <title>Fini - Kredyty</title>
        <meta
          name='description'
          content='Kredyty, płatności, ubezpieczenia w Koninie.'
        />
      </Head>
      <Header />
      <div className='container'>
        <Welcome />
        <About />
        <Credits />
        <PaymentServices />
        <Insurance />
        <Map />
        <Contact />
        <Sponsors />
        <Privacy />
      </div>
    </div>
  );
}
