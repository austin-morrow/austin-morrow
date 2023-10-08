import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  XMarkIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import PrimaryLogo from "../assets/images/logo_no_bg_lg.png";
import SecondaryLogo from "../assets/images/secondary_logo.png";
import { Link } from 'react-router-dom';


const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "Works", to: "works", current: false },
  { name: "About", to: "about", current: false },
  { name: "Services", to: "services", current: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-primary-black">
      <header>
        <div className="sticky left-0 right-0 top-2 z-40 pt-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none flex items-center justify-between">
              <div>
              <Link 
              to="/"
              >
                <img className="h-28" src={PrimaryLogo} alt="" />
                </Link>
              </div>

              <div className="flex items-center gap-x-8">
                <Link
                  to="contact"
                  className="outline outline-2 border-3 border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-black py-2 px-4 rounded-full"
                >
                  Let's chat
                </Link>

                <button
                  type="button"
                  className="group -m-2.5 rounded-full p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars2Icon className="h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="bg-neutral-900 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5">
                <span className="sr-only">Austin Morrow</span>
                <img className="h-8 w-auto" src={SecondaryLogo} alt="" />
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-primary-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      as="a"
                      to={item.to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white cursor-pointer hover:bg-neutral-800"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-300 my-4"></div>
                  <div className="pt-4">
                    <Link
                      to="contact"
                      className="outline outline-2 border-3 border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-black py-2 px-4 rounded-full"
                      onClick={closeMobileMenu}
                    >
                      Let's chat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

    </div>
  );
}
