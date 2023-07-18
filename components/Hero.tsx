import Image from 'next/image';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';

const Hero = () => {
  return (
    <section className="h-[80%] md:h-[75vh] bg-gray-50 grid place-content-center">
      <div className="max-width flex flex-col md:flex-row-reverse">
        <div className="py-16 px-8 text-center md:text-start md:w-1/2 lg:mx-auto">
          <h1 className=" text-4xl md:text-5xl font-extrabold">
            <Balancer>Find motorcycle specs quick and easy</Balancer>
          </h1>
          <p className="my-5 font-light ">
            <Balancer>
              Using our spec finder, get all specs on any motorcycle of your
              choosing.
            </Balancer>
          </p>
          <Link
            href="/search"
            className=" rounded-3xl bg-cyan-400 px-5 py-2 text-gray-800 shadow-md hover:text-gray-200"
          >
            Find Specs
          </Link>
        </div>
        <div className="flex justify-center">
          <Image
            src={'/hero.webp'}
            alt="Honda Sh 125i"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
