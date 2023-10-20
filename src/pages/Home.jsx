import React from "react";
import CMLogo from "../assets/images/cm-logo.png";
import Services from "../assets/images/nick-fewings.jpg";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ServerIcon,
  CodeBracketSquareIcon,
  RectangleGroupIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import One from "../assets/images/1.png";
import Two from "../assets/images/2.png";
import Three from "../assets/images/3.png";


const Home = () => {
  const features = [
    {
      name: "Layout.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: RectangleGroupIcon,
    },
    {
      name: "Development.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: CodeBracketSquareIcon,
    },
    {
      name: "Hosting.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: ServerIcon,
    },
  ];

  const stages = [
    {
      name: "Discovery",
      description:
        "Start the journey with a friendly chat, diving deep into your project's essence. It's all about understanding your vision and listening to your ideas.",
      icon: LightBulbIcon,
    },
    {
      name: "Proposal",
      description:
        "Ready to make it official? Craft a project proposal that outlines all the details, marking the exciting first step towards bringing your project to life.",
      icon: DocumentTextIcon,
    },
    {
      name: "Build",
      description:
        "Now, it's time to roll up your sleeves and work your magic. Begin building your project from scratch, infusing it with creativity and functionality.",
      icon: WrenchScrewdriverIcon,
    },
    {
      name: "Launch",
      description:
        "Drumroll, please! The big day has arrived. Deploy your project, making it accessible to the world. It's the moment when your vision becomes a digital reality.",
      icon: RocketLaunchIcon,
    },
  ];

  return (
    <div className="bg-primary-black">
      <div className="w-full flex-auto">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-24 lg:py-24 lg:px-8 mt-14 sm:mt-0 justify-start">
          <div className="max-w-2xl py-24">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Front End Developer from Denver, CO
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-light-gray">
              Creating custom websites for creatives and small businesses
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <Link
                to="contact"
                className="rounded-full bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold cursor-pointer text-black shadow-sm hover:bg-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                to="works"
                className="group text-sm font-semibold cursor-pointer leading-6 text-primary-light-gray hover:text-yellow-400 flex flex-row items-center"
              >
                Learn more{" "}
                <span
                  className="h-4 w-4 ml-2 group-hover:rotate-90 duration-300"
                  aria-hidden="true"
                >
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Works */}
      <div id="works" className="bg-primary-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-yellow-400">
            Explore my portfolio
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-white sm:text-4xl">
              Works
            </p>
            <p className="mt-6 text-lg leading-8 text-primary-light-gray">
            Here are a few of the things I've been working on lately.
            </p>
          </div>
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-wrap justify-center gap-4 md:gap-x-16">
              <a>
                <img
                  className="w-auto h-96 rounded-xl cursor-pointer hover:-translate-y-1.5 hover:scale-100 duration-300"
                  src={One}
                  alt="Image 1"
                />
              </a>
              <a>
                <img
                  className="w-auto h-96 rounded-xl cursor-pointer hover:-translate-y-1.5 hover:scale-100 duration-300"
                  src={Two}
                  alt="Image 2"
                />
              </a>
              <a>
                <img
                  className="w-auto h-96 rounded-xl cursor-pointer hover:-translate-y-1.5 hover:scale-100 duration-300"
                  src={Three}
                  alt="Image 3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Review */}
      <section className="relative isolate overflow-hidden bg-primary-gray px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure>
            <blockquote className="text-center text-xl font-semibold leading-8 text-primary-white sm:text-2xl sm:leading-9">
              <p>
                “Austin did a fantastic job on our website for Centurion
                Maintenance Inc. The lightning fast time frame and organization
                was well completed by Austin. We at Centurion Maintenance Inc.
                are very pleased and look forward to adding more information and
                pictures in the near future. We appreciate his time and
                efforts.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full bg-primary-white p-1"
                src={CMLogo}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-primary-white">
                  Dennis White
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-primary-white"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-primary-light-gray">
                  CEO of Centurion Maintenance Inc.
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Services */}
      <div className="overflow-hidden bg-primary-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-yellow-400">
                  What I offer
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-primary-white sm:text-4xl">
                  Services
                </p>
                <p className="mt-6 text-lg leading-8 text-primary-light-gray">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-primary-light-gray lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-primary-white">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src={Services}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="relative mx-auto max-w-7xl py-16 md:px-6 bg-primary-black">
        <div className="bg-primary-white p-20 sm:rounded-3xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-yellow-400">
              My creative process
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Project path
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Let's work together to get your ideas and turn them into your online presense.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {stages.map((stage) => (
                  <div key={stage.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                        <stage.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {stage.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {stage.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
