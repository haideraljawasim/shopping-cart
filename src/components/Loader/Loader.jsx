import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default Loader;
