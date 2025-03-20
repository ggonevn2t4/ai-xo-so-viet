
type MinhNgocLotteryProps = {
  region: 'mien-bac' | 'mien-trung' | 'mien-nam';
};

const MinhNgocLottery = ({ region }: MinhNgocLotteryProps) => {
  // We'll always use the Southern region URL as it includes all regions
  const sourceUrl = 'https://www.minhngoc.net.vn/free/index.php';

  return (
    <div className="w-full overflow-x-auto">
      <iframe 
        src={sourceUrl}
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
