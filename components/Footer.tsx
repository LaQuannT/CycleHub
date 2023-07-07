import { footerLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-50 relative bottom-0 ">
      <div className="grid grid-cols-2 gap-5 max-width mx-auto px-8 py-5 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/motorcycle-icon.png"
              width={25}
              height={25}
              alt="motorcycle icon"
              className="inline"
            />
            <h1 className="text-sm font-bold inline text-gray-500">
              Cycle <span className="text-cyan-400">Hub</span>
            </h1>
          </div>
          <small className="text-xs font-light">Cyclehub 2023</small>
          <small className="text-xs font-light block">
            All rights reserved &copy;
          </small>
        </div>
        {footerLinks.map((link) => (
          <div key={link.title}>
            <h3 className="font-semibold text-gray-500">{link.title}</h3>
            {link.links.map((value, index) => (
              <Link
                key={index}
                href={value.url}
                className="block mt-4 font-light text-sm"
              >
                {value.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex px-4 max-width mx-auto">
        <small className="flex-1 text-xs font-light">
          @2023 CycleHub. All rights reserved
        </small>
        <div>
          <Link className="text-xs font-light mr-3" href="/">
            Privacy & Policy
          </Link>
          <Link className="text-xs font-light" href="/">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
