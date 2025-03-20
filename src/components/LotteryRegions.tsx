
import { useState } from 'react';
import MinhNgocLottery from './MinhNgocLottery';

const LotteryRegions = () => {
  const [activeRegion, setActiveRegion] = useState<'mien-bac' | 'mien-trung' | 'mien-nam'>('mien-bac');

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setActiveRegion('mien-bac')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex-1 max-w-xs w-full ${
              activeRegion === 'mien-bac'
                ? 'bg-lottery-blue text-white shadow-lg'
                : 'glass-card hover:bg-lottery-light-blue/20'
            }`}
          >
            Miền Bắc
          </button>
          <button
            onClick={() => setActiveRegion('mien-trung')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex-1 max-w-xs w-full ${
              activeRegion === 'mien-trung'
                ? 'bg-lottery-blue text-white shadow-lg'
                : 'glass-card hover:bg-lottery-light-blue/20'
            }`}
          >
            Miền Trung
          </button>
          <button
            onClick={() => setActiveRegion('mien-nam')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex-1 max-w-xs w-full ${
              activeRegion === 'mien-nam'
                ? 'bg-lottery-blue text-white shadow-lg'
                : 'glass-card hover:bg-lottery-light-blue/20'
            }`}
          >
            Miền Nam
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <MinhNgocLottery region={activeRegion} />
      </div>
    </div>
  );
};

export default LotteryRegions;
