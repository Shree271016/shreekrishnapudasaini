import Head from "next/head";
import React, { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/NIT05584.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Shree Krishna Pudasaini | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center">
        <Layout className="pt-10">
          <AnimatedText text="Passion Fuels Purpose !" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium ">
                - Hi, I'm Shree Krishna pudasaini, Passionate and dynamic IT
                professional renowned for mastery in frontend development and an
                expansive skill set spanning HTML, CSS, Bootstrap, Tailwind CSS,
                JavaScript, React, Redux, TypeScript, MongoDB, Express.js,
                Node.js, and more. I am a graduate of prestigious programs such
                as the MERN stack development program by Dursikshya Education
                Network and the Proshore Nepal Bootcamp, specializing in
                cutting-edge frontend development methodologies.
              </p>
              <p className="my-4 font-medium ">
                - With a rich and extensive career journey spanning seven
                impactful years of service in Shree Birendra Military Hospital
                Chhauni as a dedicated medical technician.
              </p>
              <p
                href=""
                class="flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center"
              >
                <span>
                  - I bring invaluable expertise to my current role.Provided
                  critical medical support and care in demanding and
                  high-pressure environments, showcasing resilience,
                  adaptability, and a commitment to service excellence.
                  Extensive knowledge of healthcare information management
                  systems (HIMS).
                </span>
                <svg
                  class="w-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 ml-2"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </p>

              <p className="font-medium my-4">
                🎓 Possessing a robust academic foundation, holding Master's
                degrees in Political Science and Public Administration, and
                currently pursuing a Bachelor of Law.
              </p>
              <p className="font-medium ">
                🌟 Esteemed for exceptional collaboration skills, adept
                communication of complex technical concepts, and rapid
                adaptation to emerging technologies and challenges.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 ">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={ProfilePic}
                alt="Shree Krishna Pudasaini"
                className="w-full rounded-2xl h-auto"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between  ">
              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block text-7xl font-bold text-[rgb(0,126,106)]">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-2xl font-semibold capitalize text-[rgb(0,126,106)]">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block text-7xl font-bold text-[rgb(0,126,106)]">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-2xl font-semibold capitalize text-[rgb(0,126,106)]">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold text-[rgb(0,126,106)]">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-2xl font-semibold capitalize text-[rgb(0,126,106)]">
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
