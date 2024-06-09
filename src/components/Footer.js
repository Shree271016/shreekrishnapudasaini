import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="p-8 ps-[80px] flex items-center justify-between ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          Build With{" "}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark ">
            &#9825;
          </span>
          by &nbsp;
          <Link
            href="https://shreekrishnapudasaini.com.np"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Shree Krishna Pudasaini
          </Link>
        </div>
        <Link
          href="https://shreekrishnapudasaini.com.np"
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
