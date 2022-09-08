import React, { useState } from "react";
import "../../styles/enquiryForm.css";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    enquiry: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    console.log("HC etv", event.target.value);
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi");
  };

  const showData = (event) => {
    event.preventDefault();

    console.log("name", formData.name);
  };

  return (
    <section className="form__container">
      
        <h2>Booking Rapid Van Solutions</h2>
      

      <div className="form__header">
        <h2>Enquiry Form</h2>
      </div>
      <div>
        <form className="enquiry__form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </label>

          <label htmlFor="email">
            email:
            <input
              type="email"
              minLength={5}
              required
              onChange={handleChange}
              value={formData.email}
            />
          </label>

          <label htmlFor="phone">
            phone:
            <input
              type="phone"
              minLength={11}
              onChange={handleChange}
              value={formData.phone}
            />
          </label>

          <label htmlFor="textarea">
            Enquiery:
            <input
              type="textarea"
              required
              onChange={handleChange}
              rows={10}
              value={formData.enquiry}
            />
          </label>

          <button
            className="form__submit__button"
            type="submit"
            onClick={showData}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default EnquiryForm;
