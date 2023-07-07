import Image from 'next/image';
import { LogoImgCardProps } from '@/interfaces';

const LogoImageCard = ({ brands }: LogoImgCardProps) => {
  return (
    <>
      {brands.map((brand) => (
        <div key={brand.title} className="flex items-center justify-center p-3">
          <Image src={brand.url} width={100} height={100} alt={brand.title} />
        </div>
      ))}
    </>
  );
};

export default LogoImageCard;
