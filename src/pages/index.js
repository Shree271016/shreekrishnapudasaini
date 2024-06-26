import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/copy-removebg-preview.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shree Krishna Pudasaini</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
<TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-[80px] md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-[65%]">
              <Image
                src={profilePic}
                alt="Shree krishna pudasaini"
                className="w-[85%] h-[90vh] lg:hidden md:inline-block md:w-full md:h-[65vh]"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center mb-4 lg:w-full  lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl  "
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack (MERN) developer, I am dedicated to
                turning ideas into innovative web applications. Explore my
                latest projects and articles, showcasing my expertise in
                React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <Link
                  href="/Shreekrishnapudasaini.Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-[rgb(0,126,106)] text-light p-3 px-7 rounded-3xl text-lg font-semibold hover:bg-light hover:text-[rgb(0,126,106)] border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-[rgb(0,126,106)] hover:dark:bg-[rgb(0,126,106)] hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base xs:p-1 xs:px-2 xs:text-xs"
                  download={true}
                >
                  Resume <LinkArrow className={"w-5 ml-1"} />
                </Link>
                <Link
                 href="tel:+9779860084849"
                  target={"_blank"}
                  className="ml-4 text-xl font-medium capitalize text-dark underline hover:text-[rgb(0,126,106)] dark:text-light hover:dark:text-[rgb(0,126,106)] md:text-base xs:text-xs"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-4 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Shree Krishna Pudasaini"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
