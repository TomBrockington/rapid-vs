import React from 'react';
import { Link } from 'react-router-dom';
// Images
import Logo from '../../assets/images/RVS-logo.jpg';

function Navbar() {
  return (
    <header className='py-3 px-1 lg:p-3 grid border-b-2 border-solid border-black'>
      <section className='grid grid-flow-col justify-evenly'>
        {/* Logo */}
        <section className=''>
          <div>
            <img
              className='w-12 h-12 rounded-full'
              src={Logo}
              alt='Rapid van solutions logo'
            />
          </div>
        </section>

        <section className='flex justify-center items-center'>
          <h2 className='font-semibold ml-6 lg:text-xl'>Rapid Van Solutions</h2>
        </section>

        {/* Navigation */}
        <nav className='flex items-center'>
          <ul className='lg:pr-2'>
            <li className='text-xl font-semibold outline outline-2 outline-black rounded p-1 bg-orange-400 md:px-6'>
              <Link>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
