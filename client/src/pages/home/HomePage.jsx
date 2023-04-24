import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import Header from '../../components/header/Header';

function HomePage() {
  return (
    <div className='grid min-h-screen font-poppins'>
      <section className='grid grid-rows-reg'>
        <Navbar />
        <Header />
      </section>
    </div>
  );
}

export default HomePage;
