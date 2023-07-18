'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);

    const mobileNav = document.getElementById('mobile-nav') as HTMLElement;

    isActive
      ? (mobileNav.style.display = '')
      : (mobileNav.style.display = 'flex');
  };

  return (
    <header className="sticky top-0 bg-gray-50 z-[5]">
      <div className="mx-width mx-auto p-4 flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/motorcycle-icon.png"
            width={40}
            height={40}
            alt="motorcycle icon"
            className="inline"
          />
          <h1 className="text-2xl font-bold inline text-gray-500">
            Cycle <span className="text-cyan-400">Hub</span>
          </h1>
        </Link>

        <button
          type="button"
          className="hover:bg-gray-200 rounded p-1 md:hidden float-right"
          onClick={handleClick}
        >
          {isActive ? <AiOutlineClose size={20} /> : <FiMenu size={20} />}
        </button>

        <nav className="hidden lg:block">
          <ul className="flex space-x-3">
            <li className="nav-link">
              <Link href="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="my-0 p-1 rounded duration-300">
              <Link
                href="/search"
                className="rounded-2xl px-4 py-2 bg-cyan-400 text-gray-600 hover:text-gray-200 shadow"
              >
                Finder
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav
        id="mobile-nav"
        className="hidden absolute md:hidden bg-gray-100 flex-col gap-2 w-screen py-2 shadow-md z-0"
      >
        <Link
          href="/about"
          className="nav-link mx-2 hover:border-l-4 border-l-cyan-400"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="nav-link mx-2 hover:border-l-4 border-l-cyan-400"
        >
          Contact
        </Link>
        <Link
          href="/search"
          className="nav-link mx-2 hover:border-l-4 border-l-cyan-400"
        >
          Finder
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
