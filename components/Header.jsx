import React from "react";

const Header = () => {
  return (
    <header className="border-b-[1px] bg-white border-b-[#BCBAB840] w-full flex items-center justify-between py-4 px-24 text-Black">
      <div className="font-[600] text-2xl cursor-default">Travel</div>
      <ul className="flex gap-14 font-[500] text-lg">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Booking</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">FAQs</li>
      </ul>
      <div className="flex gap-12">
        <button className="bg-primary text-white text-base rounded-xl px-6 py-3 shadow-3xl">
          Book Now
        </button>
        <button className="font-[500] text-lg">Login</button>
      </div>
    </header>
  );
};

export default Header;
