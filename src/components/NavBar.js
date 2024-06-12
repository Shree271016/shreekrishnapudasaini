"use client";
import Link from "next/link";
import React, {  useState } from "react";
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


const CustomMobileLink = ({ href, title, className = "" ,toggle}) => {
  const router = useRouter();

  const handleClick = ()=>{
    toggle();
    router.push(href)
  }
  return (
    <button href={href} className={`${className} text-light dark:text-dark relative group my-2`} onClick={handleClick} >
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 w-full opacity-0 transition: opacity 300ms ease ${
          router.asPath === href && "opacity-100" 
        } group-hover:opacity-100 dark:bg-dark`} 
      >
        &nbsp;
      </span>
    </button>
  );
};
const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen,setIsOpen] = useState(false);
  

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full bg-[rgb(0,126,106)]/40 px-32 py-8 mb-8 font-semibold text-xl flex items-center justify-between fixed top-0 left-0 right-0 z-50 dark:text-light/100 dark:bg-[rgb(0,126,106)]/50 lg:px-16 md:px-12 sm:px-8">

<button className=" flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
  <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1': '-translate-y-0.5'}`} ></span>
  <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
  <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
 
</button>


     <div className="w-full flex justify-between items-center lg:hidden ">
     <nav>
        <CustomLink href="/" title="Home" className="mx-3" />
        <CustomLink href="/about" title="About" className="mx-3" />
        <CustomLink href="/Projects" title="Projects" className="mx-3" />
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
          className="w-6 mx-3 "
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
     </div>

    {
      isOpen ?
      <motion.div 
      initial={{scale:0,opacity:0, x:"-50%", y:"-50%"}}
      animate={{scale:1,opacity:1}}
      className="min-w-[70vh]  flex flex-col z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center bg-[rgb(0,126,106)]/50 dark:bg-[rgb(0,126,106)]/75 rounded-lg backdrop:blur-md py-32 ">
      <nav className="flex items-center flex-col justify-center">
         <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
         <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/>
         <CustomMobileLink href="/Projects" title="Projects" className=""toggle={handleClick} />
       </nav>
       <nav className="flex items-center justify-center flex-wrap mt-2 mb-2">
         <motion.a
           href="https://twitter.com"
           target={"_black"}
           whileHover={{ y: -3 }}
           whileTap={{ scale: 1.5 }}
           className="w-6 mr-3 sm-mx-1"
         >
           <TwitterIcon />
         </motion.a>
         <motion.a
           href="https://github.com/Shree271016/"
           target={"_black"}
           whileHover={{ y: -3 }}
           whileTap={{ scale: 1.5 }}
           className="w-6 mx-3  bg-light  rounded-full dark:bg-dark sm-mx-1"
         >
           <GithubIcon />
         </motion.a>
         <motion.a
           href="https://www.linkedin.com/in/shreekrishnapudasaini/"
           target={"_black"}
           whileHover={{ y: -3 }}
           whileTap={{ scale: 1.5 }}
           className="w-6 mx-3 sm-mx-1 "
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
             <SunIcon className={"fill-dark rounded-full border-none"} />
           ) : (
             <MoonIcon className={"fill-dark border-none rounded-full "} />
           )}
         </button>
       </nav>
      </motion.div>
      : null
    }
      <nav className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
        
      </nav>
    </header>
  );
};

export default NavBar;
