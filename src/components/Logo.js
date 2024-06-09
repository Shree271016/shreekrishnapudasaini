import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center bg-[#475569] w-16 h-16 text-primaryDark  rounded-full text-3xl pt-2 pr-1 font-serif border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#475569",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        श्री
      </MotionLink>
    </div>
  );
};

export default Logo;
