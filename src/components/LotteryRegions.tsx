
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
      <div className={`w-full mx-auto ${isMobile ? '' : 'max-w-4xl'} px-2 md:px-0`}>
        <div className="glass-card p-3 md:p-6 rounded-xl shadow-md">
          <MinhNgocLottery region="mien-nam" />
        </div>
      </div>
    </div>
  );
};

export default LotteryRegions;
