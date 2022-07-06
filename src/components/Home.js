import React from 'react';
import card from '../assets/card.png';

const Home = () => {
  return (
    <section className="body-section flex flex-col lg:flex-row justify-between items-center m-auto mt-16 p-4 w-3/4 ">
      <div className="text-content">
        <h1 className="text-3xl font-bold">Decentralized Fund Me,</h1>
        <p className="w-4/5 mt-5 text-md text-gray-400 leading-5">
          A new way for requesting
          <span className="text-[#2A4E9E]"> funding</span> from friends and the
          public. To get started click the button below.
        </p>

        <button className=" flex bg-blue-900 text-white px-4 py-3 rounded-md text-md font-bold mt-16 mb-2 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400">
          Connect
        </button>
        <p className="text-xs text-gray-600">We rise by lifiting others</p>
      </div>
      <div className="img-content w-full lg:w-1/2 ">
        <img src={card} alt="" />
      </div>
    </section>
  );
};

export default Home;
