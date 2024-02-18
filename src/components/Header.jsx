import { useState } from "react";
import { XMarkIcon, Bars2Icon } from "@heroicons/react/24/outline";
import PrimaryLogo from "../assets/images/logo_no_bg_lg.png";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 


  return (
    <div className="bg-primary-black">
      <header>
        <div className="sticky left-0 right-0 top-2 z-40 pt-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none flex items-center justify-between">
              <div>
                <Link to="/">
                  <img className="h-28" src={PrimaryLogo} alt="" />
                </Link>
              </div>
              <div className="flex items-center gap-x-9">
                <div className="hidden md:flex flex-row gap-x-8 text-primary-light-gray">

                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center rounded-lg px-4 py-1.5 text-sm text-primary-white ring-1 ring-primary-white cursor-pointer"
                  >
                    Contact
                  </ScrollLink>
                </div>

                <button
                  type="button"
                  className={`group -m-2.5 rounded-full p-2.5 text-primary-white ${
                    mobileMenuOpen ? "hidden" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars2Icon className="h-8 md:hidden" />
                </button>

                <button
                  type="button"
                  className={`-m-2.5 rounded-md p-2.5 text-primary-white ${
                    !mobileMenuOpen ? "hidden" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-8" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
