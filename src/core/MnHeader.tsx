import Link from 'next/link';
import React from 'react';

const MnHeader: React.FC = () => (
  <div className="bg-green-600">
    <div className="mn-container bg-primary flex-row justify-between py-2">
      <div className="flex flex-row items-center">
        <svg
          className="w-4 h-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          />
        </svg>
      </div>

      <div className="flex flex-row items-center">
        <Link href={'/contact'}>
          <a className="text-white text-xs">Contact us</a>
        </Link>
      </div>
    </div>
  </div>
);

export default MnHeader;
