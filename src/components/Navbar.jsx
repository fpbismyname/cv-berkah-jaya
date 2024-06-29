import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Icon from "/berkah-jaya.png";
import { useState } from "react";

const links = [
  {
    text: "Beranda",
    href: "#home",
  },
  {
    text: "Tentang Kami",
    href: "#about",
  },
  {
    text: "Layanan Kami",
    href: "#service",
  },
  {
    text: "Testimoni",
    href: "#testimonial",
  },
  {
    text: "Kontak",
    href: "#contact",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="sticky top-0 z-10 p-2 mb-10">
      <nav className="flex flex-row justify-between px-8 py-6 h-max shadow-xl bg-white rounded-lg border-b-orange-400 border-b-4">
        <div className="flex flex-row hover:drop-shadow-[0px_0px_5px_gray] transition cursor-pointer">
          <img
            src={Icon}
            className="object-contain w-8 mobile:w-5 tablet:w-5 mr-3"
          />
          <h1 className="flex font-bold text-xl mobile:text-sm tablet:text-sm align-middle">
            Berkah Jaya
          </h1>
        </div>
        {/* desktop */}
        <div className="flex mobile:hidden tablet:hidden items-center">
          {links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.href}
                className="mx-4 hover:font-bold transition ease-in-out hover:scale-125"
              >
                {link.text}
              </a>
            );
          })}
        </div>
        {/* mobile */}
        <div className="hidden mobile:flex tablet:flex mobile:text-sm tablet:text-sm flex-col items-center justify-center">
          <div className="flex flex-row">
            <a
              data-dropdown-toogle="dropdown"
              className="flex hover:font-bold transition ease-in-out cursor-pointer pl-16"
              onClick={() => (menu ? setMenu(false) : setMenu(true))}
            >
              Menu
            </a>
            {menu ? (
              <div className="hidden mobile:flex tablet:flex mobile:text-sm tablet:text-sm flex-col absolute top-24">
                <div className="flex bg-gray-100 border-b-orange-400 border-b-4 rounded-md flex-col shadow-xl">
                  {links.map((link, index) => {
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className="mx-4 hover:font-bold transition ease-in-out hover:scale-125 p-3"
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        {link.text}
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
