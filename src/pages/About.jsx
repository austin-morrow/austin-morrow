import React from "react";
import AboutImg from "../assets/images/about-img.png";

export default function About() {
  return (
    <div className="bg-primary-black py-24 sm:py-32">
      <div className="grid grid-cols-1 gap=x=8 gap-y-16 text-center lg:grid-cols-2">
        <div>
          <h1 className="text-white">Text</h1>
        </div>
        <div>
         <img src={AboutImg}/>
        </div>
      </div>
    </div>
  );
}
