import { PreviewCardProps } from '@/interfaces';

export default function PreviewCard({ motorcycle }: PreviewCardProps) {
  return (
    <div className="bg-gray-50 rounded shadow py-3 px-1 flex justify-between items-center mx-4 hover:bg-cyan-300">
      <span className="ml-2">
        <h2 className="font-semibold text-gray-500 text-lg">
          {motorcycle.model}
        </h2>
        <small className="font-light">{motorcycle.make}</small>
      </span>
      <span className="mr-2">
        <p className="font-semibold text-gray-500 text-lg">{motorcycle.year}</p>
      </span>
    </div>
  );
}
