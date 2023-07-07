'use client';

import CustomButton from './CustomButton';
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';

const handleClick = () => {};

const Hero = () => {
  return (
    <section className="h-[80%] md:h-[75vh] bg-gray-50 grid place-content-center">
      <div className="max-width flex flex-col md:flex-row-reverse">
        <div className="py-16 px-8 text-center md:text-start md:w-1/2 lg:mx-auto">
          <Balancer>
            <h1 className=" text-4xl md:text-5xl font-extrabold">
              Find motorcycle specs quick and easy
            </h1>
          </Balancer>
          <p className="my-5 font-light ">
            Using our spec finder, get all specs on any motorcycle of your
            choosing.
          </p>
          <CustomButton
            text="Find Specs"
            eventHandler={handleClick}
            styles="px-5 py-2 text-gray-800 shadow hover:text-gray-200"
          />
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
