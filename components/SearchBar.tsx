'use client';

import { useState } from 'react';
import CustomButton from './CustomButton';

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [productionYear, setProductionYear] = useState('');

  function handleSearch() {}

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
        className='rounded py-3 px-1 focus:outline-cyan-400 text-gray-400"'
      />
      <input
        type="text"
        name="production-year"
        id="year"
        placeholder="Production Year"
        value={productionYear}
        onChange={(e) => setProductionYear(e.target.value)}
        className='rounded py-3 px-1 focus:outline-cyan-400 text-gray-400"'
      />
      <CustomButton
        text="Search"
        btnType="button"
        styles="py-1 md:rounded px-5"
      />
    </form>
  );
}
