import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col max-w-[1440px] mx-auto md:flex-row-reverse gap-5 bg-gray-50">
      <div className="py-16 px-8 text-center md:text-start md:w-1/2">
        <h1 className="text-3xl font-extrabold md:text-5xl">
          Find motorcycle data quick and easy
        </h1>
        <p className="my-5 font-light">
          Get all specs on any motorcycle of your choosing with our spec finder.
        </p>
        <button type="button" className="px-5 py-2 rounded-3xl bg-blue-400">
          Find Specs
        </button>
      </div>
      <div className="py-16 px-8 md:w-1/2">
        <div className="flex justify-center">
          <Image
            src={'/hero.webp'}
            alt="Honda Sh 125i"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
