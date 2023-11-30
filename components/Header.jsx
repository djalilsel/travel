"use client";
import React, { useEffect } from "react";

const Header = () => {
  return (
    <header className="border-b-[1px] bg-white border-b-[#BCBAB840] w-full flex items-center justify-between py-4 px-24 text-Black">
      <div
        className="font-[600] text-2xl cursor-default"
        onClick={() =>
          document.body.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Travel
      </div>
      <ul className="flex gap-14 font-[500] text-lg">
        <li
          id="homeTitle"
          className="cursor-pointer underline-shadow"
          onClick={() =>
            document.body.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Home
        </li>
        <li
          id="bookingTitle"
          className="cursor-pointer"
          onClick={() => {
            document.querySelector("#booking").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Booking
        </li>
        <li
          id="aboutTitle"
          className="cursor-pointer"
          onClick={() =>
            document.querySelector("#about").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          About Us
        </li>
        <li
          id="faqsTitle"
          className="cursor-pointer"
          onClick={() =>
            document.querySelector("#faqs").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          FAQs
        </li>
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
