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
    <div className="bg-primary-black">
      <div className="w-full flex-auto">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-24 lg:py-24 lg:px-8 sm:mt-0 justify-start">
          <div className="max-w-2xl py-24">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Front End Developer from Denver, CO
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-light-gray">
              Creating custom websites for creatives and small businesses
            </p>
          </div>
        </div>
      </div>

      {/* Selected works */}
      <section name="work" className="bg-primary-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-white sm:text-4xl">
              Selected work
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-x-16 py-10">
            {worksData.map((box, index) => (
              <a key={index} href={box.href} target="_blank">
                <div
                  key={index}
                  className="w-72 h-96 rounded-xl cursor-pointer outline outline-2 outline-white relative space-x-4"
                >
                  <div>
                    <img
                      src={box.imageSrc}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full rounded-t-xl object-cover border-b-2 border-white"
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
              <div className="h-12 rounded-md cursor-pointer outline outline-2 outline-white text-white flex justify-center items-center hover:bg-white hover:text-black">
                View work
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <div name="about" className="bg-primary-black flex-auto">
        <div className="sm:px-8 pt-16">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <img
                      src={AboutImg}
                      className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 h-128 w-96"
                    />
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    I’m Austin Morrow. I live in Denver, CO, where I make cool
                    shit.
                  </h1>
                  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
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
                <div className="lg:pl-20">
                  <ul>
                    <li className="flex">
                      <a
                        className="group flex text-sm font-medium text-primary-light-gray transition"
                        href="https://www.instagram.com/agmorrow/"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span className="ml-4 hover:text-yellow-400 hover:text-yellow-400">
                          Follow on Instagram
                        </span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium transition text-primary-light-gray"
                        href="https://twitter.com/agmorrow_"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                        <span className="ml-4 hover:text-yellow-400">
                          Follow on Twitter
                        </span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium text-primary-light-gray transition"
                        href="https://www.linkedin.com/in/agmorrow/"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        <span className="ml-4 hover:text-yellow-400">
                          Follow on LinkedIn
                        </span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium text-primary-white transition"
                        href="https://github.com/agmorrow"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>

                        <span className="ml-4 hover:text-yellow-400">
                          Follow on GitHub
                        </span>
                      </a>
                    </li>
                    <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                      <a
                        className="group flex text-sm font-medium text-primary-light-gray transition"
                        href="mailto:austinmorrowdev@gmail.com"
                      >
                        <EnvelopeIcon
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none transition"
                        />

                        <span className="ml-4 hover:text-yellow-400">
                          austinmorrowdev@gmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-primary-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-white sm:text-4xl">
              Services
            </p>
          </div>
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-wrap justify-center gap-4 md:gap-x-16">
              <div
                className="w-72 h-96 rounded-xl cursor-pointer outline outline-2 outline-white"
                src=""
                alt="Image 1"
              >
                <div className="p-6 text-white">
                  <RectangleGroupIcon className="top-1 h-5 w-5 text-yellow-400" />
                  Layout. I enhance your online journey with well-crafted
                  layouts. I understand the power of design to make your digital
                  process both seamless and visually striking.
                </div>
              </div>
              <div
                className="w-72 h-96 rounded-xl cursor-pointer outline outline-2 outline-white"
                src=""
                alt="Image 2"
              >
                <div className="p-6 text-white">
                  <CodeBracketSquareIcon className="top-1 h-5 w-5 text-yellow-400" />
                  Development. Anim aute id magna aliqua ad ad non deserunt
                  sunt. Qui irure qui lorem cupidatat commodo.
                </div>
              </div>
              <div
                className="w-72 h-96 rounded-xl cursor-pointer outline outline-2 outline-white"
                src=""
                alt="Image 3"
              >
                <div className="p-6 text-white">
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
      <div className="relative mx-auto max-w-7xl py-16 md:px-6 bg-primary-black">
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
      </div>

      {/* Contact */}
      <Contact />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
