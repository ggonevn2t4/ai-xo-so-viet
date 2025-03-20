
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type MinhNgocLotteryProps = {
  region: 'mien-bac' | 'mien-trung' | 'mien-nam';
};

const MinhNgocLottery = ({ region }: MinhNgocLotteryProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  
  // We'll always use the Southern region URL as it includes all regions
  const sourceUrl = 'https://www.minhngoc.net.vn/free/index.php';

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Reset loading state when region changes
    setIsLoading(true);
    
    // Add timeout to ensure loading state shows for at least 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [region]);

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-12 h-12 border-4 border-t-lottery-blue border-lottery-light-blue rounded-full animate-spin mb-4"></div>
          <p className="text-lottery-blue font-medium">Đang tải kết quả...</p>
        </div>
      )}
      
      <div className={`w-full overflow-x-auto transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <iframe 
          src={sourceUrl}
          width="100%" 
          height={isMobile ? "1500" : "2000"} 
          frameBorder="0" 
          scrolling="auto"
          id="iframe_xosominhngoc" 
          name="iframe_xosominhngoc"
          className="mx-auto rounded-lg shadow-md"
          title="Kết quả xổ số Minh Ngọc"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default MinhNgocLottery;
