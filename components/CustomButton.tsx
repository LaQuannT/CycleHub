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
      className={`bg-cyan-400 rounded-3xl hover:text-gray-100 ${styles}`}
      onClick={eventHandler}
    >
      {text}
    </button>
  );
};

export default CustomButton;
