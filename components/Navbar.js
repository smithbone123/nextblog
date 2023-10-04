import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // dropdown
  const [dropdown, setDropdown] = useState(false);
  // drawer
  const [drawer, setDrawer] = useState(false);
  // search
  const [search, setSearch] = useState(false);
  // Dropdown List
  const dropdownList = [
    {
      text: "UI Design",
      href: "/Post",
    },
    {
      text: "Web Development",
      href: "/Post",
    },
    {
      text: "Headless CMS",
      href: "/Post",
    },
  ];
  return (
    <>
      <nav className="py-10 ">
        <div className="mx-auto w-11/12">
          <div className="flex items-center">
            {/* logo */}
            <div className="w-2/12">
              <Link href="/">
                <Image src="/img/logo.png" width="70" height="26" alt="" />
              </Link>
            </div>
            {/* menu */}
            <div className="hidden lg:block w-8/12">
              <ul className="flex items-center space-x-14">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white hover:text-pink-500 duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-pink-500 duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-pink-500 duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 cursor-pointer text-sm text-white hover:text-pink-500 duration-200"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    Categories
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </a>
                  {/* dropdown */}
                  {dropdown && (
                    <ul className="absolute w-[200px] bg-gray-800 mt-4 py-3 shadow-xl border">
                      {dropdownList.map(({ text, href }) => (
                        <li
                          key={text}
                          // className="border-b border-white/5 last:border-0"
                        >
                          <Link
                            className="flex py-3 px-6 text-sm text-white hover:text-pink-500 duration-200"
                            href={href}
                          >
                            {text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* dropdown */}
                </li>
              </ul>
            </div>
            {/* search */}
            <div className="hidden lg:block w-2/12 text-white relative">
              <input
                className="bg-gray-800 py-3 px-6 w-full rounded-full border"
                placeholder="Search"
              />
              {/* search icon */}
              <span class="absolute top-4 right-6 text-slate-100 text-base font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div>

            {/* mobile nav*/}
            <div className="flex items-center space-x-5 absolute right-[5%]">
              {/* search icon */}
              <div className="lg:hidden text-white">
                <a
                  className="cursor-pointer"
                  onClick={() => setSearch(!search)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </a>
              </div>
              {/* menu icon */}
              <div className="lg:hidden text-white">
                <a
                  className="cursor-pointer"
                  onClick={() => setDrawer(!drawer)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  {/* icons8 */}
                  {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-6 h-6"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M5.5,9c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h37c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM5.5,22.5c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h37c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM5.5,36c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h37c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381z"></path>
                    </g>
                  </g>
                </svg> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* search */}
      <div>
        {/* overlay */}
        <a onClick={() => setSearch(!search)} className="cursor-pointer">
          <div
            className={` ${
              search
                ? `fixed inset-0 bg-gray-800/60 transition-opacity`
                : `bg-none`
            }`}
          ></div>
        </a>
        <div
          className={`lg:hidden text-white fixed left-5 right-5 transition-all ${
            search ? `top-10` : `-top-20`
          }`}
        >
          <input
            className="bg-gray-800 py-3 px-6 w-full rounded-full border"
            placeholder="Search"
          />
          {/* search icon */}
          <span class="absolute top-4 right-6 text-slate-100 text-base font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* menu drawer */}
      <div>
        {/* overlay */}
        <a onClick={() => setDrawer(!drawer)} className="cursor-pointer">
          <div
            className={` ${
              drawer
                ? `fixed inset-0 bg-gray-800/60 transition-opacity`
                : `bg-none`
            }`}
          ></div>
        </a>
        {/* box */}
        <div
          className={`fixed top-0 bottom-0 w-5/6 max-w-sm z-50 transition-all ${
            drawer ? `left-0` : `-left-full`
          }`}
        >
          <nav className="h-full flex flex-col py-6 bg-gray-800 shadow-xl overflow-y-scroll">
            {/* Content Place Here*/}
            <div className="container mt-1 relative flex-1 px-4 sm:px-6">
              <div className="flex items-center justify-between -m-2">
                {/* Logo */}
                <div className="w-auto p-2">
                  <Link href="/" className="inline-block">
                    <Image src="/img/logo.png" width="70" height="26" alt="" />
                  </Link>
                </div>
                {/* Close Button */}
                <div className="absolute top-2 right-2 pt-0 pr-2 flex sm:-ml-10 sm:pr-4">
                  <a
                    onClick={() => setDrawer(!drawer)}
                    className="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      className="w-5 h-5 text-dark_1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Search Box */}
              <div className="relative mb-6 mt-8">
                <div className=" w-fullte xt-white relative">
                  <input
                    className="bg-gray-800 py-3 px-6 w-full rounded-full border"
                    placeholder="Search"
                  />
                  {/* search icon */}
                  <span className="absolute top-4 right-6 text-base font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Menu */}
              <ul className="w-full mb-auto pb-16">
                <li>
                  <Link
                    href="/"
                    className="block py-4 px-6 text-sm text-white hover:text-pink-500 duration-200"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="py-4 px-6 flex items-center justify-between text-sm text-white hover:text-pink-500 duration-200"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    Categories
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </a>
                  {dropdown && (
                    <ul className="ml-6">
                      {dropdownList.map(({ text, href }) => (
                        <li key={text}>
                          <Link
                            href={href}
                            className="inline-flex py-3 font-medium text-sm text-white/20 hover:text-pink-500 duration-200"
                          >
                            {text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    href="#"
                    className="block py-4 px-6 text-sm text-white hover:text-pink-500 duration-200"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="block py-4 px-6 text-sm text-white hover:text-pink-500 duration-200"
                  >
                    Account
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="block py-4 px-6 text-sm text-white hover:text-pink-500 duration-200"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="block py-4 px-6 text-sm text-white hover:text-pink-500 duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              {/* copyright */}
              <div className="mt-auto mb-8">
                <p className="my-4 text-white text-sm text-center font-light text-dark_4 tracking-wider">
                  <span data-config-id="copy">
                    &copy; 2020 All rights reserved.
                  </span>
                </p>

                <div className="text-center">
                  <button className="inline-block px-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"
                        fill="#fff"
                      />
                    </svg>
                  </button>
                  <button className="inline-block px-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 5.63381C19.3743 5.91106 18.7029 6.09908 17.9975 6.18303C18.7178 5.75172 19.2691 5.06761 19.5304 4.25494C18.8548 4.65436 18.1091 4.94439 17.3144 5.10161C16.6781 4.42281 15.7731 4 14.7692 4C12.8432 4 11.2816 5.56158 11.2816 7.48647C11.2816 7.75947 11.3124 8.02611 11.3719 8.28108C8.474 8.13553 5.90431 6.74711 4.18444 4.63736C3.88381 5.15153 3.71278 5.75064 3.71278 6.39017C3.71278 7.60014 4.32892 8.66775 5.26375 9.29236C4.69222 9.27325 4.15469 9.11603 3.68411 8.85469V8.89825C3.68411 10.5873 4.88664 11.997 6.48114 12.3178C6.189 12.3964 5.88094 12.44 5.56225 12.44C5.33706 12.44 5.11928 12.4177 4.90575 12.3752C5.34978 13.7615 6.63731 14.7696 8.16278 14.7972C6.96981 15.7321 5.46558 16.2876 3.83178 16.2876C3.55028 16.2876 3.273 16.2706 3 16.2398C4.54353 17.231 6.376 17.8089 8.3455 17.8089C14.7607 17.8089 18.2674 12.4952 18.2674 7.88697L18.2557 7.4355C18.9409 6.94681 19.5336 6.33281 20 5.63381Z"
                        fill="#fff"
                      />
                    </svg>
                  </button>
                  <button className="inline-block px-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"
                        fill="#fff"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content Place Here*/}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
