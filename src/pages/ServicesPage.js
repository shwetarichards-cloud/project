import React from "react";

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-100 to-red-100 min-h-screen py-20">
      <section className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-12">
          Our Services
        </h1>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Service Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold mb-3 text-purple-700">Web Development</h2>
            <p className="text-gray-600">
              We build modern, responsive websites tailored to your needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold mb-3 text-purple-700">Mobile App Development</h2>
            <p className="text-gray-600">
              Cross-platform mobile applications for both iOS and Android.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold mb-3 text-purple-700">UI/UX Design</h2>
            <p className="text-gray-600">
              Intuitive and beautiful user interfaces designed to delight your users.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
