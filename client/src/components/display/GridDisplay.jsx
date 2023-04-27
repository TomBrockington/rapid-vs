import React from "react";
// Components
import ContactButton from "../cta/ContactButton";
// Images
import Image1 from "../../assets/images/van_side.jpg";
import Image2 from "../../assets/images/van-interrior.jpg";
import Image3 from "../../assets/images/items_moving.jpg";

function GridDisplay() {
  return (
    <section className="grid my-16 lg:mt-24 w-full mx-auto p-4 lg:px-20">
      <div className="grid md:grid-cols-2 outline-1 outline outline-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <section className="bg-gray-100 grid items-center justify-center text-center py-8 shadow-[inset_-12px_-8px_40px_#46464660]">
          <article>
            <h6 className="font-sigmar text-4xl py-1">RAPID VAN SOLUTIONS</h6>
            <p className="text-xl">Men for hire!</p>
            <p className="text-xl">REMOVALS || GARDEN || TRANSPORT</p>
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
          <div className="grid grid-cols-2 outline outline-1 outline-white w-full">
            <article className="h-fit object-cover overflow-hidden">
              <img
                className="object-cover h-full"
                src={Image1}
                alt="van interiors"
              />
            </article>
            <article className="grid text-center justify-center bg-white dark:bg-black shadow-[inset_-12px_-8px_40px_#46464660] text-2xl px-4 dark:text-white items-center">
              No mess too big!
            </article>
            <article className="grid text-center justify-center bg-white dark:bg-black shadow-[inset_-12px_-8px_40px_#46464660] text-2xl px-4 dark:text-white items-center">
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
            <article className="grid text-center justify-center bg-white dark:bg-black shadow-[inset_-12px_-8px_40px_#46464660] text-2xl px-4 dark:text-white items-center">
              Clean Van with protective covers
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default GridDisplay;
