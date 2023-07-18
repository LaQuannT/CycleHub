'use client';

import { useState } from 'react';
import CustomButton from './CustomButton';
import { SearchParams } from '@/interfaces';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [productionYear, setProductionYear] = useState('');

  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!manufacturer.trim() && !model.trim() && !productionYear.trim()) {
      alert(
        'Please Enter a Make, Model or Production year. Fields can NOT be empty!'
      );
    }

    updateSearchParams({ manufacturer, model, productionYear });
  }

  function updateSearchParams({
    manufacturer,
    model,
    productionYear,
  }: SearchParams) {
    const url = new URL(window.location.href);
    let paramas = url.searchParams;

    manufacturer
      ? paramas.set('make', manufacturer.toLowerCase().trim())
      : paramas.delete('make');

    model
      ? paramas.set('model', model.toLowerCase().trim())
      : paramas.delete('model');

    productionYear
      ? paramas.set('year', productionYear.trim())
      : paramas.delete('year');

    url.search = paramas.toString();
    const newURL = url.toString();

    router.push(newURL);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col gap-1 md:flex-row md:gap-4 md:justify-center"
    >
      <input
        type="text"
        name="manufacturer"
        id="make"
        placeholder="Manufacturer"
        value={manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
        className="rounded py-3 px-1 focus:outline-cyan-400 text-gray-400"
      />
      <input
        type="text"
        name="motorcycle-model"
        id="model"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="rounded py-3 px-1 focus:outline-cyan-400 text-gray-400"
      />
      <input
        type="text"
        name="production-year"
        id="year"
        placeholder="Production Year"
        value={productionYear}
        onChange={(e) => setProductionYear(e.target.value)}
        className="rounded py-3 px-1 focus:outline-cyan-400 text-gray-400"
      />
      <CustomButton
        text="Search"
        btnType="submit"
        styles="py-1 md:rounded px-5 shadow-md"
      />
    </form>
  );
}
