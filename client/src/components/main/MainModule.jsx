import React from "react";
import Options from "../display/Options";
import GridDisplay from "../display/GridDisplay";

function MainModule() {
  return (
    <main className=" mt-20 px-8">
      <section className="">
        {/* BASIC INFO */}
        <article>
          <div className="text-center my-6">
            <h2 className="font-sigmar text-4xl">
              HOW CAN RAPID VAN SOLUTIONS HELP YOU?!
            </h2>
          </div>
          <div className="my-6 pt-2 text-lg px-6">
            <p>
              <span className="font-bold">Hello</span> i'm Andy, owner and
              operator of{" "}
              <span className="font-sigmar">Rapid Van Solutions </span>a
              business that understands the moving and waste removal needs of
              the public. Myself and the team offer fast transport and labour
              for clearing and disposing of tonnes of material. We are great at{" "}
              <span className="font-semibold"> short notice </span> calls and
              <span className="font-semibold"> on-the-day </span> appointments.
              With a variety of <span className="italic">all purpose</span>{" "}
              vehicles we can take any oversized, delicate or cumbersome items
              and deliver them safely. <span>I</span> pride myself on offering
              quality service conducted in a professional manner. The vans are
              always kept in a clean condition and we have protective sheeting
              and padding to ensure a safe journey.
            </p>
          </div>
          <div className="text-center pt-5 text-xl">
            Contact me{" "}
            <a href="tel:+447852909967">
              <span className="font-semibold text-hyperlink-blue">
                right now
              </span>
              !
            </a>
            <section className="py-4">
              <p>
                By Phone -
                <span>
                  {" "}
                  <a href="tel:+447852909967"> Andy: 07852909967 </a>
                </span>
              </p>
              <a href="mailto: rapidvansolutions@gmail.com">
                <p>
                  By Email -<span> rapidvansolutions@gmail.com</span>
                </p>
              </a>
            </section>
          </div>
        </article>
      </section>

      {/* Options */}
      <section>
        <article className="text-center my-10 lg:mt-24 pb-6">
          <h3 className="text-4xl font-sigmar">SERVICE OPTIONS AVAILABLE</h3>
        </article>
        <Options />
      </section>

      {/* DISPLAY - 6 BOXS */}
      <GridDisplay />
    </main>
  );
}

export default MainModule;
