import React from "react";

function ContactButton() {
  return (
    <a href="tel:+447852909967">
      <article className="border-gray-100 border-solid border-4 h-fit bg-main-colour text-center lg:text-xl p-4">
        CLICK HERE TO <span className="font-bold">BOOK NOW</span> || 07852909967
      </article>
    </a>
  );
}

export default ContactButton;
