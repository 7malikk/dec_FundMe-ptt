import React from 'react';

const Navbar = () => {
  return (
    <section className="NavBar-Section flex flex-row justify-between px-10 pt-1 ">
      <h1>
        <span className="text-[#94A5C5] font-semibold text-2xl"> dec</span>
        <span className="text-[#2A4E9E] font-semibold text-2xl">FundMe</span>
      </h1>
      <button className=" bg-blue-800 font-bold text-white px-12 py-2 rounded-md text-lg font-semi-bold shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400">
        Connect
      </button>
    </section>
  );
};

export default Navbar;
