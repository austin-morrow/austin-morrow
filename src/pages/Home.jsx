import React from "react";
import Contact from "../components/Contact";
import CMLogo from "../assets/images/cm-logo.png";
import CMWeb from "../assets/images/cm-web.png";
import KYWeb from "../assets/images/kysenior-web.png";
import MorrowWeb from "../assets/images/morrow-web.png";
import ScrollToTopButton from "../components/ScrollToTopButton";
import AboutImg from "../assets/images/about-img.png";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  ServerIcon,
  CodeBracketSquareIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";

const worksData = [
  {
    title: "Centurion Maintenance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageSrc: CMWeb,
    href: "https://centurionmaintenanceinc.com/",
  },
  {
    title: "Morrow Manor Photography",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    imageSrc: MorrowWeb,
    href: "https://www.google.com",
  },
  {
    title: "KY Senior Health",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: KYWeb,
    href: "https://www.google.com",
  },
];

const Home = () => {
  return (
    <div className="bg-primary-white">
      <div className="w-full flex-auto">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-24 lg:py-24 lg:px-8 sm:mt-0 justify-start">
          <div className="max-w-2xl py-24">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Front End Developer from Denver, CO
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-black">
              Creating custom websites for creatives and small businesses
            </p>
          </div>
        </div>
      </div>

      {/* Selected works */}
      <section name="work" className="bg-primary-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-black sm:text-4xl">
              Selected work
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-x-16 py-10">
            {worksData.map((box, index) => (
              <a key={index} href={box.href} target="_blank">
                <div
                  key={index}
                  className="w-72 h-96 rounded-xl cursor-pointer outline outline-2 outline-black relative space-x-4"
                >
                  <div>
                    <img
                      src={box.imageSrc}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full rounded-t-xl object-cover border-b-2 border-black"
                    />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-white text-lg font-bold">{box.title}</p>
                    <p className="text-gray-400">{box.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <Link to="/works" className="w-5/6">
              <div className="h-12 rounded-md cursor-pointer outline outline-2 outline-black text-black flex justify-center items-center hover:bg-white hover:text-black">
                View work
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <div name="about" className="bg-primary-white flex-auto">
        <div className="sm:px-8 pt-16">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <img
                      src={AboutImg}
                      className="bg-zinc-100 object-cover dark:bg-zinc-800 h-128 w-96 outline"
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="text-left">
                      <div>Email</div>
                      <div>austinmorrowdev@gmail.com</div>
                    </div>
                    <div className="text-left">
                      <div>Phone</div>
                      <div>720.985.9184</div>
                    </div>
                  </div>
                </div>

                <div className="lg:order-first lg:row-span-2">
                  <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                    I’m Austin Morrow. I live in Denver, CO, where I make cool
                    shit.
                  </h1>
                  <div className="mt-6 space-y-7 text-base text-black">
                    <p>
                      I love building and designing web applications. With a
                      background in non-profit work, I have always looked for
                      ways to empower individuals and share stories. I have
                      found that web development is more than just building a
                      website and hosting it online.
                    </p>
                    <p>
                      With a background in computer science, I'm a problem
                      solver at heart and love taking on complex and challenging
                      projects. I'm great at quickly getting up to speed and
                      breaking down tricky business requirements for
                      industry-specific systems.
                    </p>
                    <p>
                      As a full-stack developer, I'm a one-stop-shop, able to
                      take ideas from conception to completion, handling the
                      entire process from start to finish.
                    </p>
                    <p>
                      So whether you're a non-technical founder building your
                      first app or an established enterprise with an existing
                      tech team, I'm ready to jump in and help you get your next
                      big idea off the ground.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Services
            </p>
          </div>
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-wrap justify-center gap-4 md:gap-x-16">
              <div
                className="w-72 h-96 rounded-xl cursor-pointer outline outline-2 outline-black"
                src=""
                alt="Image 1"
              >
                <div className="p-6 text-black">
                  <RectangleGroupIcon className="top-1 h-5 w-5 text-yellow-400" />
                  Layout. I enhance your online journey with well-crafted
                  layouts. I understand the power of design to make your digital
                  process both seamless and visually striking.
                </div>
              </div>
              <div
                className="w-72 h-96 rounded-xl cursor-pointer outline outline-2 outline-black"
                src=""
                alt="Image 2"
              >
                <div className="p-6 text-black">
                  <CodeBracketSquareIcon className="top-1 h-5 w-5 text-yellow-400" />
                  Development. Anim aute id magna aliqua ad ad non deserunt
                  sunt. Qui irure qui lorem cupidatat commodo.
                </div>
              </div>
              <div
                className="w-72 h-96 rounded-xl cursor-pointer outline outline-2 outline-black"
                src=""
                alt="Image 3"
              >
                <div className="p-6 text-black">
                  <ServerIcon className="top-1 h-5 w-5 text-yellow-400" />
                  Hosting. Ac tincidunt sapien vehicula erat auctor pellentesque
                  rhoncus. Et magna sit morbi lobortis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="relative mx-auto max-w-7xl py-16 md:px-6 bg-primary-black">
        <div className="bg-neutral-700 p-20 sm:rounded-3xl">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure>
              <blockquote className="text-xl font-semibold leading-8 text-primary-white sm:text-2xl sm:leading-9">
                <p>
                  “Austin did a fantastic job on our website for Centurion
                  Maintenance Inc. The lightning fast time frame and
                  organization was well completed by Austin. We at Centurion
                  Maintenance Inc. are very pleased and look forward to adding
                  more information and pictures in the near future. We
                  appreciate his time and efforts.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex">
                <img
                  className="h-10 w-10 rounded-full bg-primary-white p-1"
                  src={CMLogo}
                  alt=""
                />
                <div className="pl-4">
                  <div className="font-semibold text-primary-white">
                    Dennis White
                  </div>
                  <div className="text-primary-light-gray">
                    CEO of Centurion Maintenance Inc.
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div> */}

      {/* Contact */}
      {/* <Contact /> */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
