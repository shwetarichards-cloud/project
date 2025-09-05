import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        {/* Overlay for gradient/color */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 opacity-70"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to MyApp
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Building modern, colorful landing pages with React and Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#services"
              className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-400 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Fast</h3>
            <p className="text-gray-600">
              Quick setup and lightning-fast performance for your projects.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Responsive</h3>
            <p className="text-gray-600">
              Looks perfect on all devices — mobile, tablet, and desktop.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
            <p className="text-gray-600">
              Easily modify colors, layouts, and content to match your brand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
