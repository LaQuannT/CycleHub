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

export interface MotorcycleProps {
  make: string;
  model: string;
  year: string;
  type?: string;
  displacement?: string;
  engine?: string;
  power?: string;
  top_speed?: string;
  compression?: string;
  bore_stroke?: string;
  valves_per_cylinder?: string;
  fuel_control?: string;
  cooling?: string;
  gearbox?: string;
  transmission?: string;
  front_tire?: string;
  rear_tire?: string;
  front_brakes?: string;
  rear_brakes?: string;
  total_weight?: string;
  fuel_capacity?: string;
  starter?: string;
}

export interface PreviewCardProps {
  motorcycle: MotorcycleProps;
}

export interface SearchParams {
  manufacturer: string;
  model: string;
  productionYear: string;
  offset?: number;
}

export interface MotorcycleData {
  data: Array<MotorcycleProps>;
}

export interface SearchProps {
  searchParams: SearchParams;
}

export interface MotorcycleModalProps {
  motorcycle: MotorcycleProps;
  eventHandler: MouseEventHandler<SVGElement>;
}
