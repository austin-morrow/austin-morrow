import React from "react";
import Contact from "../components/Contact";
import ComingSoon from "../assets/images/coming_soon.png";


const Home = () => {
  return (
    <div className="bg-primary-black">
 <div class="max-w-7xl mx-auto px-6 py-32 sm:py-24 lg:py-24 lg:px-8 sm:mt-0 flex flex-col sm:flex-row justify-between">
  <div class="max-w-2xl mb-8 sm:mb-0">
    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
      Front End Developer from Denver, CO
    </h1>
    <p class="mt-6 text-lg leading-8 text-primary-light-gray">
      Creating custom websites for creatives and small businesses
    </p>
  </div>
  <div class="logo">
    <img class="h-56" src={ComingSoon} alt="" />
  </div>
</div>



 


      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Home;
