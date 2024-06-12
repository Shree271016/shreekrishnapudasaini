import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
        <h3 className="capitalize font-bold text-2xl dark:text-primary sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-[160px]">
      <h2 className="font-bold text-8xl mb-[100px] w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light  md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            type="Front End Development BootCamp"
            time="Nov-2023  -  Feb-2024"
            place="PROSHORE NEPAL"
            info="
           I created the 'Skillshore' Quiz App during a 3-month Bootcamp, employing Tailwind CSS,
TypeScript, RTK Query, Redux , Formik, and Yup validation."
          />
          <Details
            type="MERN Stack Development Program"
            time="Nov-2022  -  Aug-2023"
            place="Dursikshya Education Network"
            info="
          designed an e-commerce interface with Redux JS and React Bootstrap for an optimal user
experience . Developed an e-commerce website using MERN stack, Bootstrap, and Material-UI."
          />
          <Details
            type="C# DOT NET Developement"
            time="Apr-2024  -  Present Studying"
            place="Kathmandu Metropolitan City"
            info="
          We're utilizing C#.NET MVC to create an Inventory Management System (IMS) that will streamline inventory operations for administrators, public users, and counter workers. We are adopting secure role-based access control (RBAC) to ensure that each user type has the proper amount of access: complete control for administrators, view access for public users, and limited management functions for counter workers. 
 We use C# for backend development, the MVC framework for application structure, and SQL Server for database management. "
          />
          <Details
            type="Master's Degree in Public Administration"
            time="Oct-2023"
            place="Tribhuvan University"
            info="
           As a MERN stack developer with a Master's Degree in Public Administration, I bring a unique blend of technical expertise and strategic management skills to the table. My background in public administration has equipped me with strong project management abilities, strategic planning, and effective team leadership. I am well-versed in regulatory compliance, risk assessment, and ethical decision-making, ensuring that my projects adhere to the highest standards of data privacy and security. My training in quantitative analysis and program evaluation allows me to make data-driven decisions, optimizing application performance and user experience. Additionally, my experience in budgeting, financial management, and human resource management ensures efficient resource allocation and team cohesion. My understanding of public sector projects adds value, particularly in civic tech and public administration roles, making me a well-rounded candidate in the IT field."
          />
          <Details
            type="Master's Degree in Political Science"
            time="May-2021"
            place="Tribhuvan University"
            info="
           As an experienced MERN stack developer with a Master's degree in Political Science, I bring a distinct set of analytical, research, and communication talents to the IT industry. My expertise helps me understand complex data and create data-driven decisions, which I've used in projects involving massive datasets and user requirements analysis. Research skills allow for systematic problem solving, while great communication promotes efficient engagement with clients and teams. Understanding governance and ethics enables me to build responsible, user-centric products like civic engagement and e-government platforms. My interdisciplinary efforts demonstrate new answers to societal difficulties by integrating political and technical knowledge. My leadership and project management expertise, as well as a commitment to social impact, demonstrate my ability to develop meaningful, high-quality software solutions."
          />
          <Details
            type="LLB (Bachelor of Legislative Law)"
            time="2nd Year Studying"
            place="Prithivi Narayan Campus,TU"
            info="
           As a MERN stack developer with three years of experience and an LLB degree, you can highlight your unique interdisciplinary skills by showcasing projects that bridge law and technology. Focus on legal tech applications such as legal document automation, case management systems . Develop innovative solutions like blockchain-based smart contracts and legal document verification systems. Highlight your ability to create legal research tools, cybersecurity applications, and online dispute resolution platforms. Emphasize the real-world impact of your projects and your practical experience through internships or collaborations with law firms."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
