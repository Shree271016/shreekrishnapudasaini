import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-[-14px] bottom-3 flex items-center justify-center overflow-hidden md:right-2 md:left-auto md:top-0 md:bottom-auto md:text-xs md:h-[20vh] md:w-[25%] ">
      <div className=" h-auto flex items-center justify-center relative md:text-xs">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light md:text-[8px] " />
        <Link
          href="mailto:pudasainishreekrisna1@gmail.com"
          className=" flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgb(0,126,106)] text-light shadow-md border border-solid border-[rgb(0,126,106)] rounded-full w-20 h-20 font-semibold hover:bg-light hover:text-[rgb(0,126,106)] hover:border-2  hover:border-dark
          dark:text-light dark:bg-[rgb(0,126,106)] hover:dark:text-[rgb(0,126,106)] hover:dark:bg-light hover:dark:border-[rgb(0,126,106)] md:w-[70px] md:h-[70px] xs:w-[45px] xs:h-[45px] xs:text-[8px] sm:w-[60px] sm:h-[60px] sm:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
