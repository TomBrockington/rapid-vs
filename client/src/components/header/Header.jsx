import React from 'react';
// Images
import WasteImg from '../../assets/images/waste.jpg';
// Display images
import DisplayImage1 from '../../assets/images/white-goods.jpg';
import DisplayImage2 from '../../assets/images/good_van.jpg';
import DisplayImage3 from '../../assets/images/spacious-bike.jpg';
import DisplayImage4 from '../../assets/images/van-interrior.jpg';
import DisplayImage5 from '../../assets/images/pink_bike.jpg';
import DisplayImage6 from '../../assets/images/RVS-logo.jpg';

function Header() {
  return (
    <header className='bg-gray-100 grid'>
      {/* Content */}
      <section className='grid p-3'>
        <section className='relative grid gap-0 bg-center bg-main-bg bg-cover w-full bg-no-repeat h-full outline outline-4 outline-black rounded'>
          {/* Image 2x3 rect */}
          <section className='absolute hidden top-4 right-4 outline outline-4 outline-black rounded md:grid grid-cols-3 p-3 bg-transparent-orange gap-x-2 gap-y-2'>
            <div className='grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px]'>
              <img src={DisplayImage1} alt='van in working conditions' />
            </div>
            <div className='grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px]'>
              <img src={DisplayImage2} alt='van in working conditions' />
            </div>
            <div className='grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px]'>
              <img src={DisplayImage3} alt='van in working conditions' />
            </div>
            <div className='grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px]'>
              <img src={DisplayImage4} alt='van in working conditions' />
            </div>
            <div className='grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px]'>
              <img src={DisplayImage5} alt='van in working conditions' />
            </div>
            <div className='grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px]'>
              <img src={DisplayImage6} alt='van in working conditions' />
            </div>
          </section>
          <div className='grid'>
            <section className='grid justify-center gap-1 lg:justify-start px-3 lg:w-fit lg:h-fit lg:gap-4 lg:p-4'>
              <article className='border-white border-solid border-4 h-fit mt-4 lg:mt-0 bg-main-colour text-center p-4'>
                <h1 className='text-4xl lg:text-6xl font-bold'>
                  Rapid Van Solutions
                </h1>
                <h2 className='text-2xl font-semibold my-1'>
                  Tavistocks Favourite Removal Men
                </h2>
                <h3 className='hidden lg:grid text-lg'>
                  Available at short notice 6 days a week!
                </h3>
              </article>
              <a href='tel:+447852909967'>
                <article className='border-white border-solid border-4 h-fit bg-transparent-orange text-center lg:text-xl p-4'>
                  CLICK HERE TO <span className='font-bold'>CALL NOW</span> ||
                  07852909967
                </article>
              </a>
            </section>

            <section className='p-4 grid h-fit mt-32 pt-10 lg:mt-4'>
              <article className='border-white border-solid border-4 h-fit mt-4 grid lg:grid-cols-5 gap-2 lg:gap-4 lg:p-4 bg-transparent-orange text-center p-2 lg:text-xl'>
                <span className='p-2 outline outline-2 outline-black rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium'>
                  White Goods
                </span>
                <span className='p-2 outline outline-2 outline-black rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium'>
                  Long Distance
                </span>
                <span className='p-2 outline outline-2 outline-black rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium'>
                  Delicate Items
                </span>
                <span className='p-2 outline outline-2 outline-black rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium'>
                  Large Exquipment
                </span>
                <span className='p-2 outline outline-2 outline-black rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium'>
                  Garden & Waste
                </span>
              </article>
              <article className='border-white border-solid border-4 h-fit mt-4 bg-main-colour text-center p-2 lg:text-xl'>
                Registered and fully licenced for eco-friendly waste disposal,
                and <span>Category 3 </span>waste.
              </article>
              <div className='grid w-fit h-fit lg:absolute lg:bottom-2 lg:right-2'>
                <section className='mt-4 p-4 flex justify-end bg-white lg:w-fit'>
                  <img
                    className='h-[80px]'
                    src={WasteImg}
                    alt='Environmental Waste Compliance Logo'
                  />
                </section>
              </div>
            </section>
          </div>
        </section>
      </section>
    </header>
  );
}

export default Header;
