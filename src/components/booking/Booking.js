import React from "react";
import "../../styles/booking.css";
import EnquiryForm from "./EnquiryForm";


function Booking() {
  return (
    <section className="bookinginfo__container">
      <div>Info</div>
      <EnquiryForm />
      <div>Map</div>
    </section>
  );
}

export default Booking;
