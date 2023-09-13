import React from "react";

const processSteps = [
  {
    title: "Discovery",
    description: "Understand client requirements and project goals.",
  },
  {
    title: "Proposal",
    description:
      "Create a detailed proposal including scope, timeline, and cost.",
  },
  {
    title: "Develop",
    description: "Start building the project based on the approved proposal.",
  },
  {
    title: "Launch",
    description: "Deploy the project and make it live for the client.",
  },
];

export default function Process() {
  return (
    <div className="bg-primary-black py-24 sm:py-32">
      <div className="flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="col-span-1">
            <p className="text-4xl font-bold">The Process</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div></div>
            <div className="col-span-1">
              {processSteps.map((step, index) => (
                <div key={index} className="mb-4">
                  <p className="text-xl font-semibold">{step.title}</p>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
