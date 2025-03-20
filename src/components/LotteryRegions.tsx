
import { useEffect, useState } from 'react';
import MinhNgocLottery from './MinhNgocLottery';
import { useIsMobile } from '@/hooks/use-mobile';

const LotteryRegions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Simple animation effect for when the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          <span className="inline-block bg-lottery-blue text-white px-4 py-2 rounded-lg shadow-md">
            Kết Quả Xổ Số
          </span>
        </h2>
        <p className="text-center mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base px-4">
          Cập nhật kết quả xổ số các miền Bắc, Trung, Nam nhanh chóng và chính xác
        </p>
      </div>

      <div className={`w-full mx-auto ${isMobile ? '' : 'max-w-4xl'} px-2 md:px-0`}>
        <div className="glass-card p-3 md:p-6 rounded-xl shadow-md">
          <MinhNgocLottery region="mien-nam" />
        </div>
      </div>
    </div>
  );
};

export default LotteryRegions;
