import React from "react";

function Footer() {
  return (
    <div className="h-32 w-full bg-blue-950 mt-10 flex justify-center items-center text-white">
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
