import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PageNotFound() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="flex flex-col gap-10 min-h-screen justify-center text-center items-center">
        <img
          data-aos="fade-down"
          data-aos-duration="750"
          className="w-40"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bank_BTN_logo.svg/2560px-Bank_BTN_logo.svg.png"
        />
        <h1 data-aos="fade" data-aos-duration="1000">
          404 | Not Found
        </h1>
        {/* eslint-disable */}
        <Link data-aos="fade-up" data-aos-duration="750" to="/">
          <div className="mt-5 m-4 p-3 hover:bg-slate-700 rounded-lg text-center text-md outline outline-1">
            <a>Back to home</a>
          </div>
        </Link>
      </div>
    </section>
  );
}
