import React from "react";
import PrimaryLogo from "../assets/images/logo_no_bg_lg.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import LinkedIn from "../assets/images/linkedin.png";
import GitHub from "../assets/images/github.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="static bg-primary-black left-0 right-0 top-2 z-40 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none flex items-center justify-between border-t">
          <div className="pt-14 flex flex-row gap-x-4 text-primary-light-gray">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="works">Works</Link>
            </div>
            <div>
              <Link to="about">About</Link>
            </div>
            <div>
              <Link to="services">Services</Link>
            </div>
            <div>
              <Link to="contact">Contact</Link>
            </div>
          </div>

          <div className="flex items-center gap-x-8">
          <div className="pt-14 flex flex-row gap-x-4 text-primary-light-gray">
            <div >
              <img className="h-8" src={Instagram} alt="" />
            </div>
            <div>
            <img className="h-8" src={Twitter} alt="" />
            </div>
            <div>
            <img className="h-8" src={LinkedIn} alt="" />
            </div>
            <div>
            <img className="h-8" src={GitHub} alt="" />
            </div>
          </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-none flex items-center justify-between">
          <div className="pt-14">
            <img className="h-20" src={PrimaryLogo} alt="" />
          </div>

          <div className="flex items-center gap-x-8">
            <div className="text-primary-light-gray">Austin Morrow 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
