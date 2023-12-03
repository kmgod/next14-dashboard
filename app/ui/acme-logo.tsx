import { BuildingLibraryIcon } from '@heroicons/react/24/outline';
import { roboto_mono } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${roboto_mono.className} flex flex-row items-center leading-none text-white`}
    >
      <BuildingLibraryIcon className="h-6 w-6 rotate-[15deg]" />
      <p className="ml-2 text-[16px]">KMS School</p>
    </div>
  );
}
