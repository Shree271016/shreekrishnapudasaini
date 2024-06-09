"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { headers } from "../../next.config";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 w-full opacity-0 transition: opacity 300ms ease ${
          router.asPath === href && "opacity-100" // Show underline only on active link and hover
        } group-hover:opacity-100`} // Show underline on hover
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full bg-[rgb(0,126,106)]/40 px-32 py-8 mb-8 font-semibold text-xl flex items-center justify-between fixed top-0 left-0 right-0 z-50 dark:text-light/100 dark:bg-[rgb(0,126,106)]/50">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4 " />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/Projects" title="Projects" className="mx-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          target={"_black"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 1.5 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/Shree271016/"
          target={"_black"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 1.5 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/shreekrishnapudasaini/"
          target={"_black"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 1.5 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full  p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark border-none"} />
          ) : (
            <MoonIcon className={"fill-dark border-none"} />
          )}
        </button>
      </nav>
      <nav className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </nav>
    </header>
  );
};

export default NavBar;
