
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

// Dummy data for lottery results
const DUMMY_RESULTS = {
  "northern": {
    "date": "12/08/2023",
    "special": "54321",
    "first": "12345",
    "second": ["11111", "22222"],
    "third": ["33333", "44444", "55555", "66666", "77777", "88888"],
    "fourth": ["1234", "2345", "3456", "4567"],
    "fifth": ["1234", "2345", "3456", "4567", "5678", "6789"],
    "sixth": ["123", "234", "345"],
    "seventh": ["12", "23", "34", "45"],
  },
  "central": {
    "date": "12/08/2023",
    "province": "Quảng Nam",
    "eighth": ["12"],
    "seventh": ["123"],
    "sixth": ["1234"],
    "fifth": ["12345"],
    "fourth": ["12345", "23456", "34567", "45678"],
    "third": ["12345", "23456", "34567"],
    "second": ["12345"],
    "first": ["12345"],
    "special": ["12345"],
  },
  "southern": {
    "date": "12/08/2023",
    "province": "TP. HCM",
    "eighth": ["12"],
    "seventh": ["123"],
    "sixth": ["1234"],
    "fifth": ["12345"],
    "fourth": ["12345", "23456", "34567"],
    "third": ["12345", "23456"],
    "second": ["12345"],
    "first": ["12345"],
    "special": ["12345"],
  }
};

type LotteryResultsProps = {
  region?: 'northern' | 'central' | 'southern';
  initialDate?: string;
};

const LotteryResults = ({ region = 'northern', initialDate }: LotteryResultsProps) => {
  const [currentDate, setCurrentDate] = useState<string>(initialDate || new Date().toLocaleDateString('vi-VN'));
  const [results, setResults] = useState<any>(DUMMY_RESULTS[region]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formatPrize = (prize: string | string[], className = 'lottery-number') => {
    if (Array.isArray(prize)) {
      return prize.map((num, index) => (
        <span key={index} className={`${className} mx-1 my-1`}>
          {num}
        </span>
      ));
    }
    return <span className={`${className} mx-1 my-1`}>{prize}</span>;
  };

  const changeDate = (direction: 'prev' | 'next') => {
    setIsLoading(true);
    // Simulate loading for a real API call
    setTimeout(() => {
      // In a real app, you would fetch data for the new date
      setIsLoading(false);
    }, 500);
  };

  const renderNorthernResults = () => (
    <div className="space-y-4 animate-scale-in">
      <div className="glass-card p-4">
        <h3 className="text-lg font-bold mb-2">Giải Đặc Biệt</h3>
        <div className="flex justify-center">
          {formatPrize(results.special, 'lottery-number-special')}
        </div>
      </div>

      <div className="glass-card p-4">
        <h3 className="text-lg font-bold mb-2">Giải Nhất</h3>
        <div className="flex justify-center">
          {formatPrize(results.first)}
        </div>
      </div>

      <div className="glass-card p-4">
        <h3 className="text-lg font-bold mb-2">Giải Nhì</h3>
        <div className="flex flex-wrap justify-center">
          {formatPrize(results.second)}
        </div>
      </div>

      <div className="glass-card p-4">
        <h3 className="text-lg font-bold mb-2">Giải Ba</h3>
        <div className="flex flex-wrap justify-center">
          {formatPrize(results.third)}
        </div>
      </div>

      <div className="glass-card p-4">
        <h3 className="text-lg font-bold mb-2">Giải Tư</h3>
        <div className="flex flex-wrap justify-center">
          {formatPrize(results.fourth)}
        </div>
      </div>

      <div className="glass-card p-4">
        <h3 className="text-lg font-bold mb-2">Giải Năm</h3>
        <div className="flex flex-wrap justify-center">
          {formatPrize(results.fifth)}
        </div>
      </div>

      <div className="glass-card p-4">
        <h3 className="text-lg font-bold mb-2">Giải Sáu</h3>
        <div className="flex flex-wrap justify-center">
          {formatPrize(results.sixth)}
        </div>
      </div>

      <div className="glass-card p-4">
        <h3 className="text-lg font-bold mb-2">Giải Bảy</h3>
        <div className="flex flex-wrap justify-center">
          {formatPrize(results.seventh)}
        </div>
      </div>
    </div>
  );

  const renderCentralResults = () => (
    <div className="space-y-4 animate-scale-in">
      <div className="glass-card p-4">
        <h3 className="text-lg font-bold mb-2">{results.province}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2">Giải Đặc Biệt</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.special, 'lottery-number-special')}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Nhất</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.first)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Nhì</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.second)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Ba</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.third)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Tư</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.fourth)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Năm</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.fifth)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Sáu</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.sixth)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Bảy</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.seventh)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Tám</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.eighth)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSouthernResults = () => (
    <div className="space-y-4 animate-scale-in">
      <div className="glass-card p-4">
        <h3 className="text-lg font-bold mb-2">{results.province}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2">Giải Đặc Biệt</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.special, 'lottery-number-special')}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Nhất</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.first)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Nhì</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.second)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Ba</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.third)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Tư</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.fourth)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Năm</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.fifth)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Sáu</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.sixth)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Bảy</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.seventh)}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Giải Tám</h4>
            <div className="flex flex-wrap justify-center">
              {formatPrize(results.eighth)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => changeDate('prev')} 
          className="p-2 rounded-full glass-card hover:bg-lottery-light-blue/20 transition-all duration-300"
          disabled={isLoading}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 glass-card px-4 py-2">
          <Calendar className="w-5 h-5 text-lottery-blue" />
          <span className="font-medium">{results.date}</span>
        </div>

        <button 
          onClick={() => changeDate('next')} 
          className="p-2 rounded-full glass-card hover:bg-lottery-light-blue/20 transition-all duration-300"
          disabled={isLoading}
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-60">
          <div className="w-10 h-10 border-4 border-lottery-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {region === 'northern' && renderNorthernResults()}
          {region === 'central' && renderCentralResults()}
          {region === 'southern' && renderSouthernResults()}
        </>
      )}
    </div>
  );
};

export default LotteryResults;
