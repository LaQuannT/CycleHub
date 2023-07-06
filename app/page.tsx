import Hero from '@/components/Hero';
import { popularBrands } from '@/constants';
import Image from 'next/image';

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className="my-12 py-10 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-center text-2xl font-bold my-10">
            Search your favorite brands
          </h2>
          <div className="flex flex-col items-center gap-40 md:flex-row md:justify-center">
            {popularBrands.map((brand) => (
              <Image
                key={brand.title}
                src={brand.url}
                width={200}
                height={200}
                alt={brand.title}
                className=""
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
