import React from 'react';

function Header() {
  return (
    <header className='bg-gray-100 grid'>
      {/* Content */}
      <section className='grid p-3'>
        <section className='grid gap-0 bg-center bg-main-bg bg-cover w-full bg-no-repeat h-full outline outline-4 outline-black rounded'>
          <section className='flex justify-center px-3'>
            <article className='border-white border-solid border-4 h-fit mt-4 bg-main-colour text-center p-4'>
              <h1 className='text-4xl font-bold'>Rapid Van Solutions</h1>
              <h2 className='text-lg'>Tavistocks Favourite Moving Men</h2>
            </article>
          </section>
          <section className='p-4'>
            <article className='border-white border-solid border-4 h-fit mt-4 bg-main-colour text-center p-4'>
              <a href='tel:+447852909967'>CLICK HERE TO CALL NOW</a>
            </article>
          </section>
        </section>
      </section>
    </header>
  );
}

export default Header;
