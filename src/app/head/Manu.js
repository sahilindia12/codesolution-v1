'use client'



import Link from 'next/link';
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<>
<div className=' md:my-2 sm:mx-[12vw]  mx-[4vw]'>

<div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        Menu
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.292 7.707a1 1 0 011.414 0L10 11.003l3.293-3.296a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="  origin-top-right absolute right-0 mt-2 w-61 rounded-md shadow-lg   bg-slate-50 ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <Link href={'/'}>homw </Link>
            </a>
            <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <Link href={'/'}>home </Link>
            </a>
            <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <Link href={'/api'}>homw </Link>
            </a>
            <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <Link href={'/api'}>api </Link>
            </a>
          </div>
        </div>
      )}
    </div>
</div>

{/* <div className=' md:my-8 sm:mx-[12vw]  mx-[4vw]'>

<div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        Menu
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.292 7.707a1 1 0 011.414 0L10 11.003l3.293-3.296a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="  origin-top-right absolute right-0 mt-2 w-51 rounded-md shadow-lg   bg-slate-50 ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <Link href={'/'}>homw </Link>
            </a>
            <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <Link href={'/'}>home </Link>
            </a>
            <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <Link href={'/api'}>homw </Link>
            </a>
            <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <Link href={'/api'}>api </Link>
            </a>
          </div>
        </div>
      )}
    </div>
</div> */}

</>

  );
};

export default DropdownMenu;
