import React from 'react';

const Footer = () => {
  return (
    <section className="footer-section fixed bottom-0 w-full p-5 flex justify-center bg-[#94A5C5]">
      <div className=" text-center">
        Built with 💖 by{' '}
        <a
          className="underline hover:no-underline hover:text-blue-500"
          href="https://github.com/7malikk"
          target="_blank"
          rel="noreferrer">
          Malikk
        </a>
      </div>
    </section>
  );
};

export default Footer;
