import React from "react";
// Data
import { firstData, secondData, thirdData } from "../../utils/data/Data";
// Icons
import { BsCheck2Circle } from "react-icons/bs";

function Options() {
  return (
    <div className="grid max-w-screen-md gap-10 md:grid-cols-3 md:max-w-none sm:mx-auto">
      {/* First container */}
      <div>
        <div className="p-8 h-full grid bg-gray-900 rounded">
          <div className="mb-4 text-center">
            <p className="text-4xl mt-2 font-sigmar tracking-wide text-white">
              Covering Mainland UK
            </p>
          </div>
          <ul className="mb-8 pt-4 space-y-2 text-2xl">
            {firstData.map((item, index) => {
              return (
                <li key={index} className="flex items-center">
                  <article className="mr-3 text-white">
                    <BsCheck2Circle size={30} />
                  </article>
                  <p className="font-medium text-gray-300">{item.text}</p>
                </li>
              );
            })}
          </ul>
          <button
            id="basic"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-main-colour hover:bg-orange-600 focus:shadow-outline focus:outline-none"
          >
            Book Now
          </button>
        </div>

        <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
        <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
        <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
      </div>

      {/* Second container */}
      <div>
        <div className="p-8 h-full grid bg-gray-900 rounded">
          <div className="mb-4 text-center">
            <p className="text-4xl mt-2 font-sigmar tracking-wide text-white">
              Oversized and Delicate
            </p>
          </div>
          <ul className="mb-8 pt-4 space-y-2 text-2xl">
            {secondData.map((item, index) => {
              return (
                <li key={index} className="flex items-center">
                  <article className="mr-3 text-white">
                    <BsCheck2Circle size={30} />
                  </article>
                  <p className="font-medium text-gray-300">{item.text}</p>
                </li>
              );
            })}
          </ul>
          <button
            id="shop"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md bg-main-colour hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white"
          >
            <span>07852909967</span>
          </button>
        </div>
        <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
        <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
        <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
      </div>

      {/* Third container */}
      <div className=''>
        <div className="p-8 h-full grid bg-gray-900 rounded">
          <div className="mb-4 text-center">
            <p className="text-4xl mt-2 font-sigmar tracking-wide text-white">
              On The Day Bookings
            </p>
          </div>
          <ul className="mb-8 pt-4 space-y-2 text-2xl">
            {thirdData.map((item, index) => {
              return (
                <li key={index} className="flex items-center">
                  <article className="mr-3 text-white">
                    <BsCheck2Circle size={30} />
                  </article>
                  <p className="font-medium text-gray-300">{item.text}</p>
                </li>
              );
            })}
          </ul>
          <button
            
            id="fullstack"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md bg-main-colour hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white"
          >
           <a href="mailto: rapidvansolutions@gmail.com">Email</a>
          </button>
        </div>
        <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
        <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
        <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
      </div>
    </div>
  );
}

export default Options;
