
import LotteryHeader from '@/components/LotteryHeader';
import LotteryFooter from '@/components/LotteryFooter';
import DreamForm from '@/components/DreamForm';
import { Gift } from 'lucide-react';

const DreamInterpretation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LotteryHeader />
      
      <main className="flex-grow pt-24 pb-12">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-down">
              <span className="inline-block px-4 py-1 mb-4 bg-lottery-light-blue/30 text-lottery-blue rounded-full text-sm font-medium">
                AI Xổ Số - Giải Mã Giấc Mơ
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Chuyển Đổi Giấc Mơ Thành Con Số May Mắn
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Nhập mô tả về giấc mơ của bạn và AI của chúng tôi sẽ phân tích để đưa ra những con số có thể mang lại may mắn cho bạn.
              </p>
            </div>
            
            <DreamForm />
            
            <div className="max-w-3xl mx-auto mt-16">
              <div className="glass-card p-6 md:p-8 animate-slide-up">
                <h2 className="text-xl md:text-2xl font-serif font-bold mb-6 flex items-center">
                  <Gift className="w-6 h-6 mr-2 text-lottery-blue" />
                  Giấc Mơ Phổ Biến
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-white/80 dark:bg-lottery-dark/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-bold mb-2">Mơ thấy Tiền</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        Mơ thấy tiền thường liên quan đến tài lộc và may mắn trong cuộc sống.
                      </p>
                      <div className="flex space-x-2">
                        <span className="lottery-number">13</span>
                        <span className="lottery-number">31</span>
                        <span className="lottery-number">83</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/80 dark:bg-lottery-dark/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-bold mb-2">Mơ thấy Rắn</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        Rắn trong giấc mơ thường ám chỉ sự biến đổi và tái sinh.
                      </p>
                      <div className="flex space-x-2">
                        <span className="lottery-number">19</span>
                        <span className="lottery-number">29</span>
                        <span className="lottery-number">49</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/80 dark:bg-lottery-dark/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-bold mb-2">Mơ thấy Nước</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        Nước tượng trưng cho cảm xúc và tiềm thức sâu thẳm.
                      </p>
                      <div className="flex space-x-2">
                        <span className="lottery-number">36</span>
                        <span className="lottery-number">63</span>
                        <span className="lottery-number">97</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/80 dark:bg-lottery-dark/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-bold mb-2">Mơ thấy Mèo</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        Mèo trong giấc mơ thường liên quan đến trực giác và bí ẩn.
                      </p>
                      <div className="flex space-x-2">
                        <span className="lottery-number">12</span>
                        <span className="lottery-number">23</span>
                        <span className="lottery-number">45</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/80 dark:bg-lottery-dark/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-bold mb-2">Mơ thấy Nhà</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        Nhà tượng trưng cho bản thân và cảm giác an toàn.
                      </p>
                      <div className="flex space-x-2">
                        <span className="lottery-number">01</span>
                        <span className="lottery-number">10</span>
                        <span className="lottery-number">11</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/80 dark:bg-lottery-dark/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-bold mb-2">Mơ thấy Người Quen</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        Người quen xuất hiện trong mơ thường liên quan đến mối quan hệ.
                      </p>
                      <div className="flex space-x-2">
                        <span className="lottery-number">28</span>
                        <span className="lottery-number">82</span>
                        <span className="lottery-number">38</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="mt-8 text-sm text-gray-600 dark:text-gray-300">
                  Lưu ý: Các con số này chỉ mang tính chất tham khảo. Xổ số là trò chơi có tính ngẫu nhiên cao.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LotteryFooter />
    </div>
  );
};

export default DreamInterpretation;
