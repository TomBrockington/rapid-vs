import React from "react";
// Components
import ContactButton from "../cta/ContactButton";
// Images
import Image1 from "../../assets/images/van_side.jpg";
import Image2 from "../../assets/images/van-interrior.jpg";
import Image3 from "../../assets/images/items_moving.jpg";

function GridDisplay() {
  return (
    <section className="container grid my-16 lg:mt-24 w-full mx-auto lg:p-4 lg:px-20">
      <div className="grid md:grid-cols-2 bg-gray-100 rounded-xl p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <section className="grid items-center justify-center text-center py-8">
          <article>
            <h6 className="font-sigmar text-4xl py-2 mb-2">RAPID VAN SOLUTIONS</h6>
            <p className="text-xl">Men for hire!</p>
            <p className="text-xl mb-2">REMOVALS || GARDEN || TRANSPORT</p>
            <p className="text-xl">Based In Tavistock</p>
            <p className="text-xl mb-2">
              Available <span className="italic">across </span> the{" "}
              <span className="font-semibold">south west.</span>
            </p>
            <div className=''>
              <ContactButton />
            </div>
          </article>
        </section>

        <section className="p-2 grid w-full">
          <div className="grid grid-cols-2 outline outline-2 outline-main-colour rounded-xl overflow-hidden w-full">
            <article className="h-fit object-cover overflow-hidden">
              <img
                className="object-cover h-full"
                src={Image1}
                alt="van interiors"
              />
            </article>
            <article className="grid text-center justify-center bg-gray-100 dark:bg-black lg:text-2xl px-4 dark:text-gray-100 items-center">
              No mess too big!
            </article>
            <article className="grid text-center justify-center bg-gray-100 dark:bg-black lg:text-2xl px-4 dark:text-gray-100 items-center">
              Bikes and Super Bikes
            </article>
            <article className="h-fit object-cover overflow-hidden">
              <img
                className="object-cover h-full"
                src={Image2}
                alt="van interiors"
              />
            </article>
            <article className="overflow-hidden">
              <img
                className="object-cover h-full"
                src={Image3}
                alt="van interiors"
              />
            </article>
            <article className="grid text-center justify-center bg-gray-100 dark:bg-black lg:text-2xl px-4 dark:text-gray-100 items-center">
              Clean Van with protective covers
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default GridDisplay;
