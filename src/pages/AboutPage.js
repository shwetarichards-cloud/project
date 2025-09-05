import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-100 to-red-100 min-h-screen py-20">
      {/* Hero/About Intro Section */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-6">
          About Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          We are a passionate team of developers and designers dedicated to building high-quality, user-centric web and mobile applications. Our mission is to help businesses succeed by providing them with the tools they need to thrive in the digital world.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Innovation</h3>
            <p className="text-gray-600">
              We constantly explore new technologies and ideas to provide innovative solutions.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Quality</h3>
            <p className="text-gray-600">
              We deliver high-quality products with attention to detail and excellence in every project.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Customer Focus</h3>
            <p className="text-gray-600">
              Our clients are at the heart of everything we do. We strive to exceed their expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
