'use client';

import { PreviewCardProps } from '@/interfaces';
import { useState } from 'react';
import MotorcycleModal from './MotorcycleModal';

export default function PreviewCard({ motorcycle }: PreviewCardProps) {
  const [isActive, setIsActive] = useState(false);

  function handleOpen() {
    setIsActive(true);
    const body = document.querySelector('body') as HTMLBodyElement;
    body.style.overflow = 'hidden';
  }

  function handleClose() {
    setIsActive(false);
    const body = document.querySelector('body') as HTMLBodyElement;
    body.style.overflow = 'visible';
  }

  return (
    <>
      <div
        className="bg-gray-50 rounded shadow py-3 px-1 flex justify-between items-center mx-4 hover:bg-cyan-300"
        onClick={handleOpen}
        role="button"
      >
        <span className="ml-2">
          <h2 className="font-semibold text-gray-500 text-lg">
            {motorcycle.model}
          </h2>
          <small className="font-light">{motorcycle.make}</small>
        </span>
        <span className="mr-2">
          <p className="font-semibold text-gray-500 text-lg">
            {motorcycle.year}
          </p>
        </span>
      </div>
      {isActive && (
        <MotorcycleModal motorcycle={motorcycle} eventHandler={handleClose} />
      )}
    </>
  );
}
