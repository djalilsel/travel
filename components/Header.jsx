"use client";
import React, { useEffect } from "react";

const Header = () => {
  const scrollLink = (section) => {
    const position =
      section.offsetTop - document.getElementById("home").offsetTop;
    window.scrollTo({ top: position, behavior: "smooth" });
  };
  useEffect(() => {
    // const homeOffset =
    //   document.getElementById("home").offsetTop -
    //   document.getElementById("home").offsetTop;
    // const homeHight = document.getElementById("home").offsetHeight;
    // const bookingOffset =
    //   document.getElementById("booking").offsetTop -
    //   document.getElementById("home").offsetTop;
    // const bookingHight = document.getElementById("booking").offsetHeight;
    // const aboutOffset =
    //   document.getElementById("about").offsetTop -
    //   document.getElementById("home").offsetTop;
    // const aboutHight = document.getElementById("about").offsetHeight;
    // const faqsOffset =
    //   document.getElementById("faqs").offsetTop -
    //   document.getElementById("home").offsetTop;
    // const faqsHight = document.getElementById("faqs").offsetHeight;
    // addEventListener("scroll", () => {
    //   console.log(
    //     window.scrollY + window.innerHeight,
    //     homeOffset + homeHight / 2
    //   );
    //   if (window.scrollY > homeOffset + homeHight) {
    //     document
    //       .getElementById("homeTitle")
    //       .classList.remove("underline-shadow");
    //   } else if (
    //     window.scrollY + window.innerHeight >=
    //     homeOffset + homeHight / 2
    //   ) {
    //     document.getElementById("homeTitle").classList.add("underline-shadow");
    //   }
    //   if (window.scrollY + window.innerHeight > bookingOffset + bookingHight) {
    //     document
    //       .getElementById("bookingTitle")
    //       .classList.remove("underline-shadow");
    //   } else if (
    //     window.scrollY + window.innerHeight >=
    //     bookingOffset + bookingHight / 2
    //   ) {
    //     document
    //       .getElementById("bookingTitle")
    //       .classList.add("underline-shadow");
    //   }
    //   if (window.scrollY + window.innerHeight > aboutOffset + aboutHight) {
    //     document
    //       .getElementById("aboutTitle")
    //       .classList.remove("underline-shadow");
    //   } else if (
    //     window.scrollY + window.innerHeight >=
    //     aboutOffset + aboutHight / 2
    //   ) {
    //     document.getElementById("aboutTitle").classList.add("underline-shadow");
    //   }
    //   if (window.scrollY + window.innerHeight > faqsOffset + faqsHight) {
    //     document
    //       .getElementById("faqsTitle")
    //       .classList.remove("underline-shadow");
    //   } else if (
    //     window.scrollY + window.innerHeight >=
    //     faqsOffset + faqsHight / 2
    //   ) {
    //     document.getElementById("homeTitle").classList.add("underline-shadow");
    //   }
    // });
    addEventListener("scroll", () => {
      const homeOffset =
        document.getElementById("home").offsetTop +
        document.getElementById("home").offsetHeight / 2;
      const bookingOffset =
        document.getElementById("home").offsetTop +
        document.getElementById("booking").offsetTop +
        document.getElementById("booking").offsetHeight / 2;
      const aboutOffset =
        document.getElementById("home").offsetTop +
        document.getElementById("about").offsetTop +
        document.getElementById("about").offsetHeight / 2;
      const faqsOffset =
        document.getElementById("home").offsetTop +
        document.getElementById("faqs").offsetTop +
        document.getElementById("faqs").offsetHeight / 2;
      if (
        window.scrollY + document.getElementById("home").offsetTop <
          homeOffset &&
        window.scrollY +
          document.getElementById("home").offsetTop +
          window.innerHeight >
          homeOffset
      ) {
        document.getElementById("homeTitle").classList.add("underline-shadow");
      } else {
        document
          .getElementById("homeTitle")
          .classList.remove("underline-shadow");
      }
      if (
        window.scrollY + document.getElementById("home").offsetTop <
          bookingOffset &&
        window.scrollY +
          document.getElementById("home").offsetTop +
          window.innerHeight >
          bookingOffset
      ) {
        document
          .getElementById("bookingTitle")
          .classList.add("underline-shadow");
      } else {
        document
          .getElementById("bookingTitle")
          .classList.remove("underline-shadow");
      }
      if (
        window.scrollY + document.getElementById("home").offsetTop <
          aboutOffset &&
        window.scrollY +
          document.getElementById("home").offsetTop +
          window.innerHeight >
          aboutOffset
      ) {
        document.getElementById("aboutTitle").classList.add("underline-shadow");
      } else {
        document
          .getElementById("aboutTitle")
          .classList.remove("underline-shadow");
      }
      if (
        window.scrollY + document.getElementById("home").offsetTop <
          faqsOffset &&
        window.scrollY +
          document.getElementById("home").offsetTop +
          window.innerHeight >
          faqsOffset
      ) {
        document.getElementById("faqsTitle").classList.add("underline-shadow");
      } else {
        document
          .getElementById("faqsTitle")
          .classList.remove("underline-shadow");
      }
    });
  }, []);
  return (
    <header className="sticky top-0 border-b-[1px] bg-white border-b-[#BCBAB840] w-full flex items-center justify-between py-4 px-24 text-Black">
      <div
        className="font-[600] text-2xl cursor-default"
        onClick={() => scrollLink(document.body)}
      >
        Travel
      </div>
      <ul className="flex gap-14 font-[500] text-lg">
        <li
          id="homeTitle"
          className="cursor-pointer underline-shadow"
          onClick={() => scrollLink(document.getElementById("home"))}
        >
          Home
        </li>
        <li
          id="bookingTitle"
          className="cursor-pointer"
          onClick={() => scrollLink(document.getElementById("booking"))}
        >
          Booking
        </li>
        <li
          id="aboutTitle"
          className="cursor-pointer"
          onClick={() => scrollLink(document.getElementById("about"))}
        >
          About Us
        </li>
        <li
          id="faqsTitle"
          className="cursor-pointer"
          onClick={() => scrollLink(document.getElementById("faqs"))}
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
