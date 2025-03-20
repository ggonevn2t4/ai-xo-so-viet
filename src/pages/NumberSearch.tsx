
import LotteryHeader from '@/components/LotteryHeader';
import LotteryFooter from '@/components/LotteryFooter';
import NumberSearchForm from '@/components/NumberSearchForm';
import { Search, Info } from 'lucide-react';

const NumberSearch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LotteryHeader />
      
      <main className="flex-grow pt-24 pb-12">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-down">
              <span className="inline-block px-4 py-1 mb-4 bg-lottery-light-blue/30 text-lottery-blue rounded-full text-sm font-medium">
                AI Xổ Số - Tra Cứu Số
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Tra Cứu Kết Quả Xổ Số Nhanh Chóng
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Nhập dãy số mà bạn muốn kiểm tra để xem nó đã xuất hiện trong kết quả xổ số của đài nào, ngày nào và giải nào.
              </p>
            </div>
            
            <NumberSearchForm />
            
            <div className="max-w-3xl mx-auto mt-16">
              <div className="glass-card p-6 md:p-8 animate-slide-up">
                <h2 className="text-xl md:text-2xl font-serif font-bold mb-6 flex items-center">
                  <Info className="w-6 h-6 mr-2 text-lottery-blue" />
                  Hướng Dẫn Tra Cứu
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-3">Cách Nhập Số</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="bg-lottery-blue text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                        <span>Nhập từ 2 đến 6 chữ số mà bạn muốn tra cứu</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-lottery-blue text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                        <span>Bạn có thể nhập đầy đủ 6 chữ số hoặc chỉ 2-3 chữ số cuối</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-lottery-blue text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                        <span>Ví dụ: 123 sẽ tìm tất cả kết quả có đuôi là 123</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-3">Thông Tin Kết Quả</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="bg-lottery-blue text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                        <span>Hệ thống sẽ hiển thị ngày, đài, giải và số trúng</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-lottery-blue text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                        <span>Kết quả được sắp xếp theo thứ tự thời gian gần nhất</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-lottery-blue text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                        <span>Kết quả tìm kiếm sẽ bao gồm tất cả các đài xổ số Việt Nam</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-lottery-blue/10 rounded-xl border border-lottery-blue/20">
                  <h3 className="font-bold mb-2 text-lottery-blue">Mẹo tra cứu hiệu quả</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Để tra cứu hiệu quả nhất, bạn nên nhập càng nhiều chữ số càng tốt để thu hẹp kết quả. Nếu muốn kiểm tra đuôi số, chỉ cần nhập 2-3 chữ số cuối.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ví dụ: Nếu vé số của bạn là 123456, bạn có thể nhập 456 để tìm tất cả các kết quả có đuôi là 456.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LotteryFooter />
    </div>
  );
};

export default NumberSearch;
