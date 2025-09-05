import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-100 to-red-100 min-h-screen py-20">
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Have questions or want to work with us? Fill out the form below and we'll get back to you.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>  
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-purple-600 transition"
          > 
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}   
export default ContactPage;