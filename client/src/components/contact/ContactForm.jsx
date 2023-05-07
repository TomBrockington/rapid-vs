import React, { useState } from 'react';
import { contactFormInitData } from '../../utils/data/Data';

function ContactForm() {
  const [contactFortData, setContactFormData] = useState(contactFormInitData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('data', name, value);

    setContactFormData({
      ...contactFortData,
      [name]: value,
    });
  };

  const submitContactForm = (event) => {
    event.preventDefault();
    console.log('xx');
  };

  return (
    <section className='container mx-auto'>
      <div className='shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-2 rounded-xl w-full lg:px-16 lg:py-8'>
        <article>
          <h3 className='font-sigmar mb-4 lg:mb-8 text-xl lg:text-3xl'>CONTACT FORM</h3>
        </article>
        <form onSubmit={submitContactForm}>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              className='w-full p-1'
              onChange={handleChange}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              className='w-full p-1'
              onChange={handleChange}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='tel'
              name='phone'
              id='phone'
              className='w-full p-1'
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              rows={8}
              className='w-full p-1'
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='mb-2 grid justify-center w-full'>
            <input
              type='submit'
              value='Submit Contact Form!'
              className='outline-black bg-main-colour outline outline-2 rounded p-2 cursor-pointer hover:bg-orange-400 active:scale-110 active:bg-orange-600'
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
