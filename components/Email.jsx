"use client";
import React, { useState } from "react";

const Email = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mpzvldrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="m-4 md:m-16">
      <div className="bg-[#101010] p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Let's Create & Connect
        </h1>
        {isSubmitted && (
          <p className="text-green-500 text-center mt-4">
            Thank you! Your message has been sent.
          </p>
        )}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-grow md:mr-4">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="bg-transparent text-gray-500 border border-gray-500 h-12 p-4 mt-2"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col md:flex-grow md:mr-4">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="bg-transparent text-gray-500 border border-gray-500 h-12 p-4 mt-2"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-grow pt-4">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              className="bg-transparent text-gray-500 border border-gray-500 p-4 mt-2"
              placeholder="Enter your message"
              required
            />
          </div>
          {/* <button
            className="bg-gray-900 hover:bg-orange-600 text-white font-bold py-2 px-4 w-40 h-12 mt-6 md:mt-8"
            type="submit"
          >
            Send
          </button> */}
          <div className="flex flex-col justify-between">
            <div>
              <button
                className="bg-gray-900 hover:bg-orange-600 text-white font-bold py-2 px-4 w-40 h-12 mt-6 md:mt-8"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="flex justify-center mt-6 md:mt-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <a
                  href="tel:+1234567890"
                  className="text-orange-600 hover:text-orange-700 font-semibold"
                >
                  Call
                </a>
              </div>

              <div className="flex justify-center mt-6 md:mt-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:harshibagla30@gmail.com"
                  className="text-orange-600 hover:text-orange-700 font-semibold pl-2"
                >
                  Mail
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Email;
