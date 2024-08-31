"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Flower1 from "../../public/assets/flower2.png";
import Flower2 from "../../public/assets/flower3.png";
import LogoBangkit from "../../public/assets/logo_bangkit.jpeg";
import LogoErajaya from "../../public/assets/logo_erajaya_biru.jpeg";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { projectData, TProject } from "@/lib/project-data";

export default function Home() {
  return (
    <>
      <header className="px-4 py-3 flex justify-between items-center sticky top-0 bg-background z-20">
        <div className="flex items-center">
          <NavigationMenu className="md:hidden">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <FiMenu style={{ fontSize: "20px" }} />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    <ListItem href="#about" title="About">
                      Interesting stories about myself.
                    </ListItem>
                    <ListItem href="#projects" title="Projects">
                      Cool projects I've completed.
                    </ListItem>
                    <ListItem href="#experience" title="Experience">
                      The experience I've had so far.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Image className="w-28 h-auto md:ml-1" src={Logo} alt="logo" />
          <NavigationMenu className="ml-4">
            <NavigationMenuList>
              <NavigationMenuItem className="hidden md:inline">
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:inline">
                <Link href="#projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:inline">
                <Link href="#experience" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Experience
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hover:cursor-pointer ml-2 px-3 py-[10px] text-sm rounded-md hidden md:block bg-indigo-700 text-white hover:bg-indigo-500 active:bg-indigo-600">
            <Link
              href="https://drive.google.com/file/d/1peDrKYTdngB00X8rN4dIeYcWoEwJFVg1/view?usp=sharing"
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                My Resume
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://github.com/raxle789" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ fontSize: "25px" }} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/abdalfatih/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ fontSize: "25px" }} />
            </a>
          </Link>
        </div>
      </header>

      <main>
        <div
          id="about"
          className="px-14 mt-7 pb-3 flex justify-center items-center flex-wrap"
        >
          <div className="z-10">
            <h1 className="text-4xl font-bold">
              Hi <span className="text-indigo-700">there!</span>
            </h1>
            <h1 className="text-4xl font-bold">
              My name is{" "}
              <span className="text-indigo-700">Abdullah Al Fatih</span>
            </h1>
            <p className="mt-4 max-w-[600px] text-lg">
              I have hobby in the web development. Try to{" "}
              <span className="underline decoration-indigo-700 decoration-2 underline-offset-4">
                connect with me
              </span>{" "}
              and let's see how we can{" "}
              <span className="underline decoration-indigo-700 decoration-2 underline-offset-4">
                work together
              </span>
              .
            </p>
            <div className="w-fit mt-2 px-3 py-[10px] text-sm rounded-md block md:hidden hover:cursor-pointer bg-indigo-700 text-white hover:bg-indigo-500 active:bg-indigo-600">
              <Link
                href="https://drive.google.com/file/d/1peDrKYTdngB00X8rN4dIeYcWoEwJFVg1/view?usp=sharing"
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  My Resume
                </a>
              </Link>
            </div>
            <p className="mt-6 text-xl font-bold">Tech Stacks</p>
            <div className="mt-2 flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <SiNextdotjs className="text-3xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Next.js</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <FaReact className="text-3xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React js</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <BiLogoTypescript className="text-4xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Typescript</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <SiTailwindcss className="text-3xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tailwind CSS</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <SiBootstrap className="text-3xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Bootstrap</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <RiFirebaseFill className="text-3xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Firebase</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <SiMongodb className="text-3xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>MongoDb</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <SiExpress className="text-3xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Express.js</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <SiPhp className="text-4xl ml-1" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>PHP</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div>
            <Image
              className="w-[500px] h-auto hover:scale-110 transition"
              src={Flower1}
              alt="flower1"
            />
          </div>
        </div>

        <div id="projects" className="px-14 lg:px-32 lg:mt-16">
          <h1 className="mb-4 text-3xl font-bold underline decoration-indigo-700 underline-offset-4">
            My Projects
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {projectData.map((item: TProject, index: number) => (
              <Card
                key={index}
                className="min-w-[300px] hover:scale-105 transition"
              >
                <CardHeader className="w-full h-[70px]">
                  <Image
                    className="w-full h-auto object-cover rounded-sm"
                    src={item.image}
                    alt="project-image"
                    width={300}
                    height={149}
                  />
                </CardHeader>
                <CardContent className="mt-[35%]">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="text-sm text-muted-foreground my-2">
                    {item.desc}
                  </p>
                  <p className="text-sm">
                    <Link href={item.deployLink} legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        <FaLink
                          className={`mr-1 ${
                            item.deployLink ? "inline" : "hidden"
                          }`}
                        />{" "}
                        {item.deployLink}
                      </a>
                    </Link>
                  </p>
                  <p className="text-sm">
                    <Link href={item.githubLink} legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        <FaGithub className="mr-1 inline" /> {item.githubLink}
                      </a>
                    </Link>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div id="experience" className="px-14 lg:px-32 mt-20">
          <h1 className="mb-4 text-3xl font-bold underline decoration-indigo-700 underline-offset-4">
            Experience
          </h1>
          <div>
            <Card className="hover:scale-105 transition mb-4 flex">
              <div className="flex justify-center items-start pl-6 pt-7 xl:min-w-[7%]">
                <Image
                  src={LogoErajaya}
                  alt="logo_erajaya"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <CardHeader>
                  <CardTitle className="text-xl">Frontend Developer</CardTitle>
                  <CardDescription className="text-sm">
                    PT. Erajaya Swasembada, Tbk. · Internship <br />
                    Feb 2024 - Jun 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    • Building the front-end of the recruitment information
                    system (ATS) website powered by Next.js. <br />• Contributed
                    to the development of the front-end of the website by 50%.
                  </p>
                </CardContent>
              </div>
            </Card>
            <Card className="hover:scale-105 transition mb-4 flex">
              <div className="flex justify-center items-start pl-6 pt-7 xl:min-w-[7%]">
                <Image
                  src={LogoBangkit}
                  alt="logo_bangkit"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Machine Learning Cohort
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka{" "}
                    <br />
                    Aug 2023 - Jan 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    • Gained fundamental understanding in Python programming,
                    GitHub, Data Analytics, and Machine Learning, with a
                    specific emphasis on the TensorFlow framework. <br />•
                    Applied a variety of Machine Learning techniques in
                    real-world projects, encompassing Regression, Computer
                    Vision, Deep Neural Networks, Convolutional Neural Networks,
                    Natural Language Processing, and Time Series Forecasting.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
        {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div> */}
        {/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}
      </main>

      <footer className="mt-32">
        <div className="flex justify-center items-center">
          <div className="bg-indigo-700 rounded-xl px-4 py-2">
            <p className="text-center flex items-center gap-2">
              <BsTelephoneFill className="text-base" /> 089637127038{" "}
              <MdEmail className="text-[22px]" /> fatihinfo03@gmail.com
            </p>
          </div>
        </div>
        <div className="relative w-full h-[50vw] overflow-hidden">
          <Image
            className="object-cover clip-half"
            src={Flower2}
            alt="flower2"
            layout="responsive"
          />
        </div>
      </footer>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
