import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-[rgb(0,126,106)] text-light px-6 py-3 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold mb-10 text-8xl mt-[110px] w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark/80 text-light p-8 shadow-slate-700 cursor-pointer px-9"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="16vw" y="-6vw" />
        <Skill name="HTML" x="-5vw" y="-14vw" />
        <Skill name="JavaScript" x="23vw" y="6vw" />
        <Skill name="ReactJS" x="-20vw" y="-15vw" />
        <Skill name="NextJS" x="18vw" y="-15vw" />
        <Skill name="TailwindCSS" x="32vw" y="12vw" />
        <Skill name="NodeJS" x="0vw" y="-22vw" />
        <Skill name="ExpressJS" x="-25vw" y="16vw" />
        <Skill name="MongoDB" x="0vw" y="11vw" />
        <Skill name="Bootstrap" x="-16vw" y="-5vw" />
        <Skill name="ReduxToolkit" x="-23vw" y="6vw" />
        <Skill name="Figma" x="-13vw" y="17vw" />
        <Skill name="Postman" x="17vw" y="20vw" />
        <Skill name="TypeScript" x="37vw" y="-5vw" />
        <Skill name="Formik & Yup" x="-38vw" y="-2vw" />
      </div>
    </>
  );
};

export default Skills;
