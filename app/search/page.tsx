import { PreviewCard, SearchBar } from '@/components';
import { testData } from '@/constants';
import { SearchProps } from '@/interfaces';
import { fetchMotorcycles } from '@/utils';

const metadata = {
  title: 'Cycle Hub | Spec Finder',
};

export default async function Search({ searchParams }: SearchProps) {
  const motorcycles = await fetchMotorcycles({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    productionYear: searchParams.productionYear || '',
    offset: searchParams.offset || 0,
  });

  return (
    <main className="min-h-screen">
      <div className="max-width mx-auto ">
        <div className="bg-gradient-to-tr from-purple-400  to-cyan-400 rounded text-center py-16 mx-3">
          <h2 className="text-3xl font-bold text-gray-200">
            Motorcycle Search
          </h2>
          <small className="text-sm font-light">
            Search Motorcycles by Make, Model and/or year.
          </small>
        </div>
        <div className="mx-6 bg-white rounded shadow-md p-3 relative bottom-7 md:w-fit md:left-1/4 z-0">
          <SearchBar />
        </div>
        <div className="my-8 flex flex-col gap-5">
          {motorcycles?.map((bike, index) => (
            <PreviewCard key={index} motorcycle={bike} />
          ))}
        </div>
      </div>
    </main>
  );
}
