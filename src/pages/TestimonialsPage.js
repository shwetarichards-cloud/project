import React from "react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "Working with MyApp has been a fantastic experience. They delivered a high-quality product on time and on budget.",
      name: "Jane Doe",
      role: "CEO of Company",
    },
    {
      quote: "The team is professional, responsive, and incredibly talented. I would highly recommend them to anyone.",
      name: "John Smith",
      role: "Founder of Another Co.",
    },
    {
      quote: "They transformed our ideas into a beautiful and functional product. Highly skilled and dedicated team.",
      name: "Alice Johnson",
      role: "CTO of TechSolutions",
    },
    {
      quote: "Excellent communication, attention to detail, and delivered more than expected. Truly impressive.",
      name: "Mark Lee",
      role: "Project Manager at StartupHub",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-100 to-red-100 min-h-screen py-20">
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          What Our Clients Say
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Hear directly from our satisfied clients.
        </p>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <p className="text-gray-600 mb-6">"{t.quote}"</p>
            <p className="font-bold text-purple-700">{t.name}</p>
            <span className="text-gray-500">{t.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
