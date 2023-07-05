import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-transparent backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-[1440px] mx-auto p-4">
        <Link href="/">
          <h1 className="text-2xl font-bold">Cycle Hub</h1>
        </Link>
        <button type="button" className="hover:bg-gray-100 rounded p-1">
          <FiMenu size={30} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
