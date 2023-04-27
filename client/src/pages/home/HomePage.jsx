import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import Header from '../../components/header/Header';
import MainModule from '../../components/main/MainModule';
import Footer from '../../components/footer/Footer';

function HomePage() {
  return (
    <div className='grid min-h-screen font-poppins'>
      <section className='grid grid-rows-reg min-h-screen'>
        <Navbar />
        <Header />
      </section>
      <MainModule />
      <Footer />
    </div>
  );
}

export default HomePage;
