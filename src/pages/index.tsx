import MnPage from '@core/MnPage';
import React from 'react';
import Image from 'next/image';

const IndexScreen: React.FC = () => {
  return (
    <MnPage title="Home">
      {/* tailwind max height (96) is not big enough (24rem) */}
      <div className="relative w-screen" style={{ height: '30rem' }}>
        <Image
          src="/_shared/img/MountainWallpaper.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 w-screen h-16 bg-black bg-opacity-40">
          <div className="mn-container flex-row justify-between h-full">
            <div className="flex flex-row items-center">
              <p className="text-white text-sm">Joao Pedro tu consegues</p>
            </div>
            <div className="flex flex-row items-center">
              <p className="text-white text-sm">Bora Sr. Borralho</p>
            </div>
            <div className="flex flex-row items-center">
              <input type="text" className="pl-7 pr-12 w-full h-8 sm:text-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="mn-container my-16">
        <div className="my-5">Operation Warp Speed</div>
      </div>
    </MnPage>
  );
};

export default IndexScreen;
