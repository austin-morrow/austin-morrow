import React from 'react';
import AboutImg from "../assets/images/about-img.png";

export default function About() {
  return (
    <div className="bg-primary-black p-8 flex flex-col md:flex-row md:px-24 lg:px-48">
      {/* text */}
      <div className="md:w-1/2 md:pr-4">
        <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-gray-200">
        I'm [Your Name], a Denver-based front-end web developer with a passion for transforming ideas into visually stunning and user-friendly digital experiences. My journey into web development began with a simple curiosity, and it has since evolved into a career where I combine my artistic sensibilities with technical skills to create captivating websites. My current work involves [briefly describe your current work or role], where I [mention your responsibilities or projects]. In addition to my current role, I also work with a diverse range of freelance clients and engage in exciting side projects that allow me to continually push the boundaries of web development. With expertise in responsive design, user experience optimization, and proficiency in modern web technologies like HTML5, CSS3, JavaScript, and popular libraries such as React and Vue.js, I'm committed to delivering websites that not only meet but exceed your expectations. I believe in open communication, attention to detail, and timely project delivery, and I'm excited to collaborate with you on your next web development endeavor. Let's turn your vision into a digital reality.

        </p>
      </div>
      {/* image */}
      <div className="md:w-1/2 py-6">
        <img
          src={AboutImg}
          alt="Image"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
}
