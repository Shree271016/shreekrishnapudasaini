import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between md:w-[85%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-[160px]">
      <h2 className="font-bold text-8xl mb-[100px] w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            position="Front End Developer"
            company="PROSHORE NEPAL"
            companyLink="https://proshore.eu/"
            time="Nov-2023  -  Feb-2024"
            address="MuniBhairab Marg,Kathmandu"
            work="
            Completed an intensive 3-months Bootcamp in Frontend Development at Proshore Nepal,
mastering cutting-edge technologies and methodologies. 
            Leveraged Git and GitHub for version control, managing branches, pull requests, and resolving
merge conflicts effectively.

Utilized Formik and Yup validation for efficient form handling, ensuring data integrity and user
experience.
Collaborated with team members through effective communication, contributing to successful
project completion.
            "
          />
          <Details
            position="MERN Stack Developer"
            company="Dursikshya Education Network"
            companyLink="https://proshore.eu/"
            time="Nov-2022  -  Aug-2023"
            address="Kanti Path, Kathmandu"
            work="
           Developed and deployed an E-commerce website and Fruit Shop application, showcasing
proficiency in front-end and back-end development.

            Implemented authentication and authorization features using JWT (JSON Web Tokens),
enhancing security measures for user data.

Maintained thorough documentation for codebase, APIs, and project specifications to facilitate
seamless collaboration and future enhancements.

            "
          />
          <Details
            position="C# DOT NET Developer"
            company="Kathmandu Metropolitan City"
            companyLink="https://kathmandu.gov.np/?lang=en"
            time="Apr-2024  -  Present Studying"
            address="Rastriya Sabha Griha, Kathmandu"
            work="
          We are developing an Inventory Management System (IMS) using C# .NET MVC to streamline inventory processes, targeting administrators, public users, and counter staff. We are implementing secure role-based access control (RBAC) to ensure that each user type has appropriate access levels: full control for admins, view access for public users, and limited management functions for counter staff. 
 We are utilizing C# for backend development, the MVC framework for structuring the application, and SQL Server for robust database management. 

            "
          />
          <Details
            position="Paramedic"
            company="Birendra Military Hospital "
            companyLink="https://birendrahospital.nepalarmy.mil.np/"
            time="Aug-2016  - May-2023"
            address="Chhauni ,Kathmandu"
            work="
            Extensive knowledge of healthcare information management systems (HIMS).
          Proficient in navigating and utilizing core functionalities of HIMS to support daily hospital operations. 


            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
