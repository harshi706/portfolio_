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
          <button
            className="bg-gray-900 hover:bg-orange-600 text-white font-bold py-2 px-4 w-40 h-12 mt-6 md:mt-8"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Email;
