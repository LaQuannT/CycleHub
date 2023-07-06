import { FaMotorcycle } from 'react-icons/fa';
import { footerLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 relative bottom-0 w-screen">
      <div className="grid grid-cols-2 gap-5 max-w-[1440px] mx-auto px-8 py-5 md:grid-cols-4">
        <div>
          <h3 className="font-extrabold">
            <FaMotorcycle size={25} className="inline" /> CycleHub
          </h3>
          <small className="text-xs font-light">Cyclehub 2023</small>
          <small className="text-xs font-light block">
            All rights reserved &copy;
          </small>
        </div>
        {footerLinks.map((link) => (
          <div key={link.title}>
            <h3 className="font-semibold">{link.title}</h3>
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
      <div className="flex px-4">
        <small className="flex-1 text-xs font-light">
          @2023 CarHub. All rights reserved
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
