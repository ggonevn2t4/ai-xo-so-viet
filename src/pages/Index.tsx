
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Gift } from 'lucide-react';
import LotteryHeader from '@/components/LotteryHeader';
import LotteryFooter from '@/components/LotteryFooter';
import LotteryRegions from '@/components/LotteryRegions';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-lottery-dark z-50">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-lottery-blue border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-lg font-medium">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <LotteryHeader />
      
      <main className="flex-grow pt-24 pb-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 animate-slide-up">
                <span className="inline-block px-4 py-1 mb-4 bg-lottery-light-blue/30 text-lottery-blue rounded-full text-sm font-medium">
                  AI Xổ Số Việt Nam
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  Tra cứu kết quả xổ số <span className="text-lottery-blue">thông minh</span> với AI
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Hệ thống AI tổng hợp kết quả các đài xổ số ở Việt Nam theo từng ngày, giúp người chơi dò kết quả nhanh nhất và truy xuất thông tin chính xác.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/number-search" className="bg-lottery-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center">
                    <Search className="w-5 h-5 mr-2" />
                    Tra Cứu Số
                  </Link>
                  <Link to="/dream-interpretation" className="glass-card hover:bg-lottery-light-blue/20 font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center">
                    <Gift className="w-5 h-5 mr-2" />
                    Giải Mã Giấc Mơ
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-float">
                <div className="glass-card p-6 rounded-2xl shadow-glass overflow-hidden">
                  <div className="bg-lottery-blue/10 rounded-xl p-4 mb-4 flex items-center justify-between">
                    <span className="font-medium">Kết Quả Hôm Nay</span>
                    <Calendar className="w-5 h-5 text-lottery-blue" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Miền Bắc:</span>
                      <span className="text-lottery-red font-bold">54321</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Miền Trung (Quảng Nam):</span>
                      <span className="text-lottery-red font-bold">12345</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Miền Nam (TP. HCM):</span>
                      <span className="text-lottery-red font-bold">12345</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="#lottery-results" className="text-sm text-lottery-blue hover:underline">
                      Xem kết quả chi tiết ↓
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-lottery-light/70 dark:bg-lottery-dark/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Tính Năng Nổi Bật</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                AI Xổ Số cung cấp nhiều công cụ tiện ích giúp người chơi dễ dàng tiếp cận thông tin xổ số
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0ms' }}>
                <div className="w-14 h-14 bg-lottery-blue/20 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-7 h-7 text-lottery-blue" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Kết Quả Xổ Số Hàng Ngày</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cập nhật kết quả xổ số miền Bắc, miền Trung, miền Nam nhanh chóng và chính xác 100%.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="w-14 h-14 bg-lottery-blue/20 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-7 h-7 text-lottery-blue" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Tra Cứu Số Thông Minh</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dễ dàng kiểm tra xem số của bạn đã trúng ở đài nào, giải nào và khi nào chỉ với vài thao tác.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="w-14 h-14 bg-lottery-blue/20 rounded-full flex items-center justify-center mb-4">
                  <Gift className="w-7 h-7 text-lottery-blue" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Giải Mã Giấc Mơ</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chuyển đổi giấc mơ của bạn thành những con số may mắn với công nghệ AI tiên tiến.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lottery Results Section */}
        <section id="lottery-results" className="py-12 md:py-20 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Kết Quả Xổ Số Hôm Nay</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Cập nhật nhanh chóng và chính xác kết quả xổ số các miền
              </p>
            </div>
            
            <LotteryRegions />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-lottery-blue to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Tra Cứu Ngay, Trúng Lớn Ngay</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Khám phá nhiều tính năng hấp dẫn khác, giúp bạn tối ưu cơ hội trúng thưởng
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/number-search" className="bg-white text-lottery-blue hover:bg-blue-50 font-medium py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                Tra Cứu Số
              </Link>
              <Link to="/dream-interpretation" className="bg-transparent hover:bg-blue-600 text-white border border-white font-medium py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                Giải Mã Giấc Mơ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LotteryFooter />
    </div>
  );
};

export default Index;
