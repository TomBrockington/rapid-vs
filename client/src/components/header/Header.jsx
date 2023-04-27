import React from "react";
// Images
import WasteImg from "../../assets/images/waste.jpg";
import ContactButton from "../cta/ContactButton";

function Header() {
  return (
    <header className="bg-gray-100 grid h-full">
      {/* Content */}
      <section className="grid p-3">
        <section className="relative grid gap-0 bg-center bg-main-bg bg-cover w-full bg-no-repeat h-full outline outline-4 outline-black rounded">
          {/* Image 2x3 rect */}
          <section className="absolute hidden top-4 right-4 outline outline-4 outline-black rounded lg:grid grid-cols-3 p-3 bg-main-colour gap-x-2 gap-y-2">
            <div className="grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px] bg-display-1 bg-center bg-no-repeat"></div>
            <div className="grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px] bg-display-2 bg-center bg-no-repeat"></div>
            <div className="grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px] bg-display-3 bg-center bg-no-repeat"></div>
            <div className="grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px] bg-display-4 bg-center bg-no-repeat"></div>
            <div className="grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px] bg-display-5 bg-center bg-no-repeat"></div>
            <div className="grid outline outline-2 outline-black rounded bg-cover w-[100px] h-[100px] bg-display-6 bg-center bg-no-repeat"></div>
          </section>
          <div className="grid">
            <section className="grid justify-center gap-1 lg:justify-start px-3 lg:w-fit lg:h-fit lg:gap-4 lg:p-4">
              <article className="border-gray-100 border-solid border-4 h-fit mt-4 lg:mt-0 bg-main-colour text-center p-6">
                <h1 className="text-6xl lg:text-7xl font-bold mb-2 font-sigmar">
                  Rapid Van Solutions
                </h1>
                <h2 className="text-3xl font-semibold my-1 leading-7 mb-2">
                  Tavistocks Favourite Removal Men
                </h2>
                <h3 className="text-lg leading-5">
                  Available at{" "}
                  <span className="italic font-semibold">short notice</span> 6
                  days a week across the South West!
                </h3>
              </article>
              <ContactButton />
            </section>

            <section className="p-4 grid h-fit mt-32 pt-10 lg:mt-4">
              <article className="border-gray-100 font-sigmar border-solid border-4 h-fit mt-4 grid lg:grid-cols-5 gap-2 lg:gap-4 lg:p-4 bg-transparent-orange text-center p-2 lg:text-2xl">
                <span className="p-2 outline outline-2 outline-black rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium">
                  White Goods
                </span>
                <span className="p-2 outline outline-2 outline-black rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium">
                  Long Distance
                </span>
                <span className="p-2 outline outline-2 outline-black rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium">
                  Delicate Items
                </span>
                <span className="p-2 outline outline-2 outline-black rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium">
                  Large Equipment
                </span>
                <span className="p-2 outline outline-2 outline-black rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium">
                  Garden & Waste
                </span>
              </article>
              <article className="border-gray-100 border-solid border-4 h-fit mt-4 bg-main-colour text-center p-2 lg:text-xl">
                Registered and fully licenced for{" "}
                <span className="italic">eco-friendly</span> waste disposal, and{" "}
                <span className="font-semibold">Category 3 </span>waste.
              </article>

              <div className="grid w-fit h-fit lg:absolute lg:bottom-2 lg:right-4">
                <section className="mt-4 p-4 flex justify-end bg-gray-100 lg:w-fit">
                  <img
                    className="h-[80px]"
                    src={WasteImg}
                    alt="Environmental Waste Compliance Logo"
                  />
                </section>
              </div>

              <div className="hidden sm:grid p-4 outline outline-4 outline-gray-100 rounded-xl bg-main-colour hover:bg-orange-500 cursor-pointer font-medium w-fit absolute bottom-4 left-4">
                <a href="mailto: rapidvansolutions@gmail.com">
                  <p>email: rapidvansolutions@gmail.com</p>
                </a>
              </div>
            </section>
          </div>
        </section>
      </section>
    </header>
  );
}

export default Header;
