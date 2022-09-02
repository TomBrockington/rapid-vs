import React, { useState } from "react";

function EnquiryForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    console.log("HC etv", event.target.value);
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const showData = (event) => {
    event.preventDefault();

    console.log("name", name);
  };

  return (
    <section>
      <div>
        <h3>EnquiryForm</h3>
      </div>
      <div>
        <form>
          <label htmlFor="name">
            Name:
            <input type="text" minLength={5} required onChange={handleChange} />
          </label>

          <label htmlFor="textarea">
            Enquirey:
            <input
              type="textarea"
              required
              onChange={handleChange}
              rows={5}
          cols={5}
            />
          </label>

          <button onSubmit={handleSubmit} onClick={showData}>
            Submit
          </button>

        </form>
      </div>
    </section>
  );
}

export default EnquiryForm;
