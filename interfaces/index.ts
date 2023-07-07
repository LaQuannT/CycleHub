import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  text: string;
  btnType?: 'button' | 'submit';
  styles?: string;
  eventHandler?: MouseEventHandler<HTMLButtonElement>;
}

interface Brand {
  title: string;
  url: string;
}

export interface LogoImgCardProps {
  brands: Brand[];
}
