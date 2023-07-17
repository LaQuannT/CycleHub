'use client';

import { CustomButtonProps } from '@/interfaces';

const CustomButton = ({
  text,
  btnType,
  styles,
  eventHandler,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || 'button'}
      className={`bg-cyan-400 rounded-3xl ${styles}`}
      onClick={eventHandler}
    >
      <span className="flex-1 text-gray-600">{text}</span>
    </button>
  );
};

export default CustomButton;
