
import { useEffect, useRef } from 'react';

type MinhNgocLotteryProps = {
  region: 'mien-bac' | 'mien-trung' | 'mien-nam';
};

const MinhNgocLottery = ({ region }: MinhNgocLotteryProps) => {
  // Define the source URL based on the region
  const getSourceUrl = () => {
    if (region === 'mien-nam') {
      return 'https://www.minhngoc.net.vn/free/index.php';
    } else if (region === 'mien-trung') {
      return 'https://www.minhngoc.net.vn/free/trung.php';
    } else {
      return 'https://www.minhngoc.net.vn/free/bac.php';
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <iframe 
        src={getSourceUrl()}
        width="100%" 
        height="2000" 
        frameBorder="0" 
        scrolling="auto"
        id="iframe_xosominhngoc" 
        name="iframe_xosominhngoc"
        className="mx-auto"
        title="Kết quả xổ số Minh Ngọc"
      ></iframe>
    </div>
  );
};

export default MinhNgocLottery;
