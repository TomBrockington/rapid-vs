import React from "react";

function Footer() {
  return (
    <footer className="mt-8 p-4 border-t-2 border-solid border-black bg-orange-400">
      <section className='grid lg:grid-flow-col lg:justify-between'>
        <article>
          <h2 className="font-sigmar lg:text-3xl">RAPID VAN SOLUTIONS</h2>
          <h3>Owned and operated from Tavistock, Devon</h3>
        </article>
        <article className='pr-4'>
          <p>Phone: 07852909967</p>
          <p>Email: rapidvansolutions@gmail.com</p>
          <p>Available 6 Days A Week!</p>
        </article>
      </section>

      <section className='mt-8 text-center'>
        <span>
          <p>
            Website Built and Maintained By{" "}
            <a href="https:www.webdesignsbytom.com">www.webdesignsbytom.com</a>
          </p>
        </span>
      </section>
    </footer>
  );
}

export default Footer;
