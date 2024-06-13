import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base xa:text-xs">
      <Layout className="p-8 ps-[80px] flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark ">
            &#9825;
          </span>
          by &nbsp;
          <Link
           href="https://mail.google.com/mail/?view=cm&fs=1&to=pudasainishreekrishna1@gmail.com"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Shree Krishna Pudasaini
          </Link>
        </div>
        <Link
           href="https://mail.google.com/mail/?view=cm&fs=1&to=pudasainishreekrishna1@gmail.com"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
