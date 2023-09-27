import React from "react";
import CMImg from "../assets/images/cm-project.png";

const ProjectBox = ({ imageUrl }) => {
  return (
    <div className="bg-white  rounded-lg shadow-md h-80 flex flex-col justify-center items-center">
      <img src={imageUrl} alt="Project Image" className="w-64 h-48" />
    </div>
  );
};


const Work = () => {
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

  const projectBoxes = projects.map((project, index) => (
    <ProjectBox
      key={index}
      imageUrl={project.imageUrl}
      title={project.title}
      description={project.description}
    />
  ));

  return (
    <div name="work" className="bg-primary-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          WORK
        </h2>

        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {projectBoxes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
