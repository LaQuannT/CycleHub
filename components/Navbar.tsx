'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="sticky top-0 bg-gray-100">
      <nav className="md:flex md:items-center md:justify-between max-w-[1440px] mx-auto p-4">
        <Link href="/">
          <h1 className="text-2xl font-bold inline text-gray-500">
            Cycle <span className="text-cyan-400">Hub</span>
          </h1>
        </Link>

        <button
          type="button"
          className="hover:bg-gray-200 rounded p-1 md:hidden float-right"
          onClick={handleClick}
        >
          {isActive ? <AiOutlineClose size={25} /> : <FiMenu size={25} />}
        </button>

        <ul className="hidden md:flex md:items-center md:gap-5 md:text-sm md:font-light pl-7 md:py-0">
          <li className="my-0 p-1 rounded hover:text-cyan-500 hover:bg-gray-200 duration-300">
            <Link href="/about">About</Link>
          </li>

          <li className="my-0 p-1 rounded hover:text-cyan-500 hover:bg-gray-200 duration-300">
            <Link href="contact">Contact</Link>
          </li>

          <li className="my-0 p-1 rounded hover:text-cyan-500 duration-300">
            <Link
              href="/search"
              className="rounded-2xl px-4 md:py-2 bg-cyan-400 text-gray-700 font-semibold hover:text-gray-200 shadow"
            >
              Finder
            </Link>
          </li>
        </ul>
      </nav>

      <ul className="md:hidden hidden pl-8 pr-4 absolute bg-gray-100 w-full text-gray-500 font-semibold">
        <li className="hover:bg-cyan-400 rounded mb-4 p-1 hover:text-gray-200">
          <Link href="/about" className="">
            About
          </Link>
        </li>

        <li className="hover:bg-cyan-400 rounded mb-4 p-1 hover:text-gray-200">
          <Link href="contact">Contact</Link>
        </li>

        <li className="hover:bg-cyan-400 rounded mb-4 p-1 hover:text-gray-200">
          <Link href="/search" className="">
            Finder
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
