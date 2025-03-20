
import MinhNgocLottery from './MinhNgocLottery';

const LotteryRegions = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center text-lottery-blue">
          Kết Quả Xổ Số
        </h2>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <MinhNgocLottery region="mien-nam" />
      </div>
    </div>
  );
};

export default LotteryRegions;
