import React from "react";
import PrimaryLogo from "../assets/images/logo_no_bg_lg.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="static bg-primary-black py-14 mb-8 rounded-xl max-w-7xl mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none flex items-center justify-between border-t">
          <div className="pt-14">
            <Link to="/">
              <img className="h-20" src={PrimaryLogo} alt="Logo" />
            </Link>
          </div>

          <div className="flex items-center pt-14 gap-x-8">
            <div className="text-primary-light-gray">© Austin Morrow 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
