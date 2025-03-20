
import { useState } from 'react';
import LotteryResults from './LotteryResults';

const LotteryRegions = () => {
  const [activeRegion, setActiveRegion] = useState<'northern' | 'central' | 'southern'>('northern');

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setActiveRegion('northern')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex-1 max-w-xs w-full ${
              activeRegion === 'northern'
                ? 'bg-lottery-blue text-white shadow-lg'
                : 'glass-card hover:bg-lottery-light-blue/20'
            }`}
          >
            Miền Bắc
          </button>
          <button
            onClick={() => setActiveRegion('central')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex-1 max-w-xs w-full ${
              activeRegion === 'central'
                ? 'bg-lottery-blue text-white shadow-lg'
                : 'glass-card hover:bg-lottery-light-blue/20'
            }`}
          >
            Miền Trung
          </button>
          <button
            onClick={() => setActiveRegion('southern')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex-1 max-w-xs w-full ${
              activeRegion === 'southern'
                ? 'bg-lottery-blue text-white shadow-lg'
                : 'glass-card hover:bg-lottery-light-blue/20'
            }`}
          >
            Miền Nam
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <LotteryResults region={activeRegion} />
      </div>
    </div>
  );
};

export default LotteryRegions;
