import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/Screenshot 2024-06-04 101703.png";
import project2 from "../../public/images/projects/1695660187542.jpeg";
import weather from "../../public/images/projects/Screenshot 2024-06-04 132442.png";
import calculator from "../../public/images/projects/1695661504806.jpeg";
import flipCard from "../../public/images/projects/Screenshot 2024-06-04 133636.png";
import photo from "../../public/images/projects/Screenshot 2024-06-04 135320.png";
import ApiPhoto from "../../public/images/projects/Screenshot 2024-06-04 141555.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className=" relative rounded-br-2xl w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-3xl p-8 ">
      <div className="rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-full" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-10">
        <span className="text-primary font-medium text-2xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2  "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10" title="GitHub">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-[rgb(0,126,106)] text-light p-2 px-6 text-lg  font-semibold  hover:bg-light hover:text-[rgb(0,126,106)] border-2 border-solid border-transparent hover:border-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light shadow-3xl p-6 relative">
      <div className="rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-2xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2  "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            // className=" rounded-lg bg-[rgb(0,126,106)] text-light p-2 px-6 text-lg  font-semibold  hover:bg-light hover:text-[rgb(0,126,106)] border-2 border-solid border-transparent hover:border-dark"
            className="text-xl font-semibold underline text-[rgb(0,126,106)]"
          >
            Visit Project
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-10 items-end "
            title="GitHub"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <div>
          <title>Shree Krishna Pudasaini | About Page</title>
          <meta name="description" content="any description" />
        </div>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center ">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge !"
            className="mb-14"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 ">
            <div className="col-span-12 ">
              <FeaturedProject
                title="🚀 Skillshore Quiz App"
                summary=" Revolutionizing exam preparation across multiple domains including Civil Service, Nursing, Medical, Software, and Professional Tests. Our app boasts intuitive UI/UX design for seamless user experience.

⚡ Technologies Used: HTML, Tailwind CSS, React, Redux Toolkit, Redux Thunk, Formiik, Yup Validation, Figma Design, TypeScript.

🔍 Key Features:

Comprehensive exam preparation for various fields.
Elegant and user-friendly interface for easy navigation.
Robust validation, ensuring data accuracy.
Leveraged TypeScript for enhanced development."
                link="http://64.227.70.10:3000/"
                github="https://github.com/kundankarna1994/skillshore-frontend"
                img={project1}
                type="Featured project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Weather App"
                link="https://github.com/Shree271016/WeatherApp"
                github="https://github.com/Shree271016/WeatherApp"
                img={weather}
                type="Featured project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="FlipKart Using html&CSS"
                link="https://github.com/Shree271016/sk-flipcard-clone"
                github="hhttps://github.com/Shree271016/sk-flipcard-clone"
                img={flipCard}
                type="Featured project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="E-Commmerce Fruit Shop App"
                summary="Welcome to RK Juice and Fruit Store, where freshness meets convenience in the world of e-commerce! Our virtual marketplace, powered by the cutting-edge MERN (MongoDB, Express, React, Node.js) stack, redefines the way you shop for wholesome, delicious fruit products.
🍊🍏🍇 About Us:
At RK Juice and Fruit Store, we are passionate about delivering the finest quality fruit juices, fresh fruits, and related products to your doorstep. Our commitment to health and well-being drives us to source the freshest produce and create premium fruit-based offerings."
                link="https://github.com/Shree271016/R.K-Juice-store"
                github="https://github.com/Shree271016/R.K-Juice-store"
                img={project2}
                type="Featured project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Calculator"
                link="https://github.com/Shree271016/Calculator"
                github="https://github.com/Shree271016/Calculator"
                img={calculator}
                type="Featured project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title=" E-Commmerce Using Redux"
                link="https://github.com/Shree271016/Reduxapp5pm"
                github="https://github.com/Shree271016/Reduxapp5pm"
                img={photo}
                type="Featured project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Backend - Fruit shop App"
                summary="Welcome to RK Juice and Fruit Store, where freshness meets convenience in the world of e-commerce! Our virtual marketplace, powered by the cutting-edge MERN (MongoDB, Express, React, Node.js) stack, redefines the way you shop for wholesome, delicious fruit products.
🍊🍏🍇 About Us:
At RK Juice and Fruit Store, we are passionate about delivering the finest quality fruit juices, fresh fruits, and related products to your doorstep. Our commitment to health and well-being drives us to source the freshest produce and create premium fruit-based offerings."
                link="https://github.com/Shree271016/Back-end-RK-juice-store"
                github="https://github.com/Shree271016/Back-end-RK-juice-store"
                img={ApiPhoto}
                type="Featured project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
