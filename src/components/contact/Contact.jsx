import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [verfied, setverifed] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setverifed(true);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0yf2xti', 'template_a2roh7e', form.current, 'pC97ULa_0i_Owz0W0')
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
        alert('Thanks for contacting us. We will get back to you soon');
      }, (error) => {
        console.log(error.text);
        alert('Their is an error sending message');
      });
  };

  return (

    <div className='text-center'>
      <form className="text-gray-600 body-font relative" ref={form} onSubmit={sendEmail}>
        <div className="container px-4 py-15 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We love to have your comment/views on our website & wallpapers.</p>
            <p><b>Thanks for your Message</b></p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for='name' className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" name="from_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for='email' className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" name="from_email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for='message' className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>

              <ReCAPTCHA
                sitekey="6Lf8JRsiAAAAAH_pkEo9VCS8452W51S7KfQD6xkr"
                onChange={onChange}
              />

              <div className="p-2 w-full">
                <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" disabled={!verfied}>Send</button>
              </div>

              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <div class="text-indigo-500">foruseuse@gmail.com</div>
                <br />
                <span className="inline-flex">
                  <div className="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-gray-500">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
};

export default Contact
