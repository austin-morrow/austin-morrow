import React from "react";
import Contact from "../components/Contact";
import CMWeb from "../assets/images/cm-web.png";
import KYWeb from "../assets/images/kysenior-web.png";
import MorrowWeb from "../assets/images/morrow-web.png";

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

export default function Works() {
  return (
    <div className="bg-primary-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center	">
          <h2 className="text-base font-semibold leading-7 text-yellow-400">
            Latest work
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-white sm:text-4xl">
            Here are some of the projects I have worked on
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-x-16 py-10">
            {worksData.map((box, index) => (
              <a href={box.href} target="_blank">
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
        </div>
      </div>
      {/* Contact */}
      <Contact />
    </div>
  );
}
