import React from "react";
import LogoCarousel from "./LogoCarousel";


const ClientsPage = () => {
  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", alt: "Netflix" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", alt: "Facebook" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple" },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-100 to-red-100 min-h-screen py-20">
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          Our Clients
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We are proud to have worked with these amazing companies.
        </p>
      </div>

      {/* Logo Carousel */}
      <div className="container mx-auto px-4">
        <LogoCarousel logos={logos} />
      </div>
    </div>
  );
};

export default ClientsPage;
