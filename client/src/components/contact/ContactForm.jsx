import React, { useState } from "react";
import { contactFormInitData } from '../../utils/data/Data';

function ContactForm() {
  const [contactFortData, setContactFormData] = useState(contactFormInitData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("data", name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h2 className="font-sigmar">CONTACT FORM</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <div>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="submit" value="Submit Contact Form!" />
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
