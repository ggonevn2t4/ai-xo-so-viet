
import { useEffect, useRef, useState } from 'react';

type MinhNgocLotteryProps = {
  region: 'mien-bac' | 'mien-trung' | 'mien-nam';
};

const MinhNgocLottery = ({ region }: MinhNgocLotteryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Add jQuery script
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://www.minhngoc.net.vn/jquery/jquery-1.7.2.js';
    jqueryScript.async = true;
    document.head.appendChild(jqueryScript);

    // Add CSS stylesheet
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = 'https://www.minhngoc.net.vn/style/bangketqua_mini.css';
    document.head.appendChild(linkElement);

    // Wait for jQuery to load
    jqueryScript.onload = () => {
      // Clear any existing content
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }

      // Add configuration script
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        bgcolor="#9c0303";
        titlecolor="#ffffff";
        dbcolor="#0000c2";
        fsize="14px";
        kqwidth="100%";
      `;
      containerRef.current?.appendChild(configScript);

      // Add the data script
      const dataScript = document.createElement('script');
      dataScript.type = 'text/javascript';
      dataScript.src = `https://www.minhngoc.net.vn/getkqxs/${region}.js`;
      dataScript.async = true;
      dataScript.onload = () => {
        setIsLoading(false);
      };
      containerRef.current?.appendChild(dataScript);
    };

    // Cleanup function
    return () => {
      // We're not removing the scripts and styles because they might be used by other instances
      // But we clear the container
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [region]);

  return (
    <div className="w-full overflow-x-auto">
      {isLoading && (
        <div className="flex justify-center items-center p-8">
          <div className="w-8 h-8 border-4 border-lottery-blue border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3">Đang tải kết quả...</span>
        </div>
      )}
      <div ref={containerRef} id="box_kqxs_minhngoc" className="mx-auto"></div>
    </div>
  );
};

export default MinhNgocLottery;
