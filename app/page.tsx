import { Hero, LogoImageCard } from '@/components';
import { popularBrands } from '@/constants';

const Home = () => {
  return (
    <>
      <Hero />
      <section>
        <div className="max-width mx-auto">
          <h2 className="text-center text-3xl font-bold my-10">
            Search Top Brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-6">
            <LogoImageCard brands={popularBrands} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
