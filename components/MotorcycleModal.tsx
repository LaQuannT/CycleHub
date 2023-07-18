'use client';
import { MotorcycleModalProps } from '@/interfaces';
import { IoIosClose } from 'react-icons/io';

export default function MotorcycleModal({
  motorcycle,
  eventHandler,
}: MotorcycleModalProps) {
  const {
    make,
    model,
    year,
    engine,
    power,
    top_speed,
    gearbox,
    front_tire,
    rear_tire,
    fuel_capacity,
  } = motorcycle;
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-md w-[100vw] min-h-[100vh] z-10 fixed top-0 left-0">
      <div className="bg-white flex flex-col gap-8 px-10 py-4 rounded text-gray-500 absolute md:top-1/4 top-2 md:left-1/3">
        <div>
          <IoIosClose
            size={30}
            className="float-right hover:text-cyan-400"
            onClick={eventHandler}
          />
        </div>
        <div className="text-center">
          <p className="font-light">{make}</p>
          <h2 className="text-xl font-semibold text-gray-600">{model}</h2>
          <small className="font-light">{year}</small>
        </div>
        <div className="space-y-4 text-sm font-light">
          <p>
            Engine:{' '}
            <span className="font-semibold text-lg text-gray-600">
              {engine}
            </span>
          </p>
          <p>
            Gearbox:{' '}
            <span className="font-semibold text-lg text-gray-600">
              {gearbox}
            </span>
          </p>
          <p>
            Power:{' '}
            <span className="font-semibold text-lg text-gray-600">{power}</span>
          </p>
          <p>
            Top Speed:{' '}
            <span className="font-semibold text-lg text-gray-600">
              {top_speed}
            </span>
          </p>
          <p>
            Fuel Capacity:{' '}
            <span className="font-semibold text-lg text-gray-600">
              {fuel_capacity}
            </span>
          </p>
          <p>
            Front Tire:{' '}
            <span className="font-semibold text-lg text-gray-600">
              {front_tire}
            </span>
          </p>
          <p>
            Rear Tire:{' '}
            <span className="font-semibold text-lg text-gray-600">
              {rear_tire}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
