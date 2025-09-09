import React from "react";
import ReactLogo from "../assets/React-icon.svg";

const ClientsPage = () => {
  // Web App client logos
  const webLogos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      alt: "Netflix",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      alt: "Amazon",
    },
    { src: ReactLogo, alt: "React (Local)" },
  ];

  // Mobile App client logos
  const mobileLogos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
      alt: "Instagram",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
      alt: "YouTube",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023.svg",
      alt: "Twitter",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-100 to-red-100 min-h-screen py-20">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          Our Clients
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We are proud to have worked with these amazing companies.
        </p>
      </div>

      {/* Web Apps Section */}
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Web App Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {webLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 object-contain hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Apps Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Mobile App Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {mobileLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 object-contain hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
