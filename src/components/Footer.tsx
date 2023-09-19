import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 md:py-4 text-black text-center" style={{ backgroundImage: "linear-gradient(to bottom, #061e37, #0a3754)" }}>
    <div className="container mx-auto">
      <a href="https://www.facebook.com/search/top?q=farinacci%20fitness" className="flex flex-col text-blue-500 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
        <p className="text-sm mb-2">Visit us on Facebook!</p>
        <p className="text-sm mb-2">www.facebook.com/FarinacciFitness</p>
      </a>
  
      <p className="text-xs">&copy; 2023 FarinacciFitness</p>
    </div>
  </footer>
  

  );
};

export default Footer;
