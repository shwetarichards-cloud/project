import React from "react";
import newLogo from "../assets/newLogo.png"; // adjust path if your file is elsewhere

const ClientsPage = () => {
  return (
    <div className="flex justify-center py-10">
      <img
        src={newLogo}
        alt="Company Logo"
        className="h-20 object-contain hover:scale-110 transition-transform"
      />
    </div>
  );
};

export default ClientsPage;
