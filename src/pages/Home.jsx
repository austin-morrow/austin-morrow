import React from "react";
import CMImg from "../assets/images/cm-project.png";
import CMLogo from "../assets/images/cm-logo.png";
import ServicesImg from "../assets/images/services.jpg";
import {
  ServerIcon,
  CodeBracketSquareIcon,
  RectangleGroupIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";

const ProjectBox = ({ imageUrl }) => {
  return (
    <div className="bg-primary-light-gray rounded-lg shadow-md h-80 flex flex-col justify-center items-center hover:-translate-y-1.5 hover:cursor-pointer hover:scale-100 duration-300">
      <img src={imageUrl} alt="Project Image" className="w-3/5 h-4/5" />
    </div>
  );
};

const Home = () => {
  const projects = [
    {
      imageUrl: CMImg,
      title: "Project 1",
      description: "Description for Project 1",
    },
    {
      imageUrl: "image2.jpg",
      title: "Project 2",
      description: "Description for Project 2",
    },
    {
      imageUrl: "image3.jpg",
      title: "Project 3",
      description: "Description for Project 3",
    },
    {
      imageUrl: "image4.jpg",
      title: "Project 4",
      description: "Description for Project 4",
    },
  ];

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

  const services = [
    {
      name: "Discovery",
      description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      icon: LightBulbIcon,
    },
    {
      name: "Proposal",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: DocumentTextIcon,
    },
    {
      name: "Build",
      description:
        "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
      icon: WrenchScrewdriverIcon,
    },
    {
      name: "Launch",
      description:
        "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
      icon: RocketLaunchIcon,
    },
  ];

  const projectBoxes = projects.map((project, index) => (
    <ProjectBox
      key={index}
      imageUrl={project.imageUrl}
      title={project.title}
      description={project.description}
    />
  ));

  return (
    <div className="bg-primary-black">
      {/* Works */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-primary-black">
          Work
        </h2>

        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {projectBoxes}
          </div>
        </div>
      </div>

      {/* Review */}
      <section className="relative isolate overflow-hidden bg-primary-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
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
                  Deploy faster
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
              src={ServicesImg}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[24rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-primary-black py-24 sm:py-32">
        <div className="bg-primary-white p-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-yellow-400">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to start your next
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {services.map((service) => (
                  <div key={service.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                        <service.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {service.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
