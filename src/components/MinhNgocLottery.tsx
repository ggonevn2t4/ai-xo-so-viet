
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ExternalLink, Maximize } from 'lucide-react';

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

  const renderIframe = (fullScreen = false) => (
    <iframe 
      src={sourceUrl}
      width="100%" 
      height={fullScreen ? "100%" : (isMobile ? "500" : "600")}
      frameBorder="0" 
      scrolling="auto"
      id="iframe_xosominhngoc" 
      name="iframe_xosominhngoc"
      className={`mx-auto rounded-lg ${fullScreen ? 'h-full' : 'shadow-md'}`}
      title="Kết quả xổ số Minh Ngọc"
      onLoad={handleIframeLoad}
      style={{ minHeight: fullScreen ? '100vh' : 'auto' }}
    ></iframe>
  );

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-12 h-12 border-4 border-t-lottery-blue border-lottery-light-blue rounded-full animate-spin mb-4"></div>
          <p className="text-lottery-blue font-medium">Đang tải kết quả...</p>
        </div>
      )}
      
      <div className={`w-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium">Kết quả xổ số mới nhất</h3>
          
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Maximize className="h-4 w-4" />
                  <span className="hidden sm:inline">Mở rộng</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[90vh] sm:max-w-full">
                <div className="h-full pt-6">
                  {renderIframe(true)}
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <a 
              href={sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-lottery-blue hover:underline text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Mở trang mới
            </a>
          )}
        </div>
        
        <div className="overflow-x-auto">
          {renderIframe()}
        </div>
        
        <p className="text-xs text-gray-500 mt-2 text-center">
          Kết quả xổ số được cung cấp bởi Minh Ngọc
        </p>
      </div>
    </div>
  );
};

export default MinhNgocLottery;
