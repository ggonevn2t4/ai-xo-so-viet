
import LotteryHeader from '@/components/LotteryHeader';
import LotteryFooter from '@/components/LotteryFooter';
import { Shield, Clock, Trophy, RefreshCw } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LotteryHeader />
      
      <main className="flex-grow pt-24 pb-12">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-down">
              <span className="inline-block px-4 py-1 mb-4 bg-lottery-light-blue/30 text-lottery-blue rounded-full text-sm font-medium">
                Về Chúng Tôi
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                AI Xổ Số - Nền Tảng Xổ Số Thông Minh
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Chúng tôi áp dụng công nghệ AI tiên tiến để mang đến trải nghiệm xổ số tốt nhất cho người chơi Việt Nam.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 animate-scale-in">
                <div className="prose prose-lg max-w-none">
                  <h2 className="font-serif text-2xl font-bold mb-6">Câu Chuyện Của Chúng Tôi</h2>
                  
                  <p className="mb-4">
                    AI Xổ Số ra đời với mục tiêu ứng dụng công nghệ AI vào lĩnh vực xổ số tại Việt Nam, nhằm cung cấp cho người chơi một nền tảng hiện đại, thông minh và tiện lợi để tra cứu kết quả xổ số.
                  </p>
                  
                  <p className="mb-4">
                    Với đội ngũ chuyên gia AI và các chuyên gia xổ số giàu kinh nghiệm, chúng tôi đã xây dựng một hệ thống có khả năng xử lý và phân tích dữ liệu xổ số một cách nhanh chóng và chính xác, mang đến những thông tin giá trị và công cụ hữu ích cho người chơi.
                  </p>
                  
                  <p>
                    Chúng tôi cam kết cung cấp thông tin một cách minh bạch, chính xác và kịp thời, đồng thời không ngừng cải tiến và bổ sung các tính năng mới để đáp ứng nhu cầu ngày càng cao của người dùng.
                  </p>
                  
                  <h2 className="font-serif text-2xl font-bold mt-10 mb-6">Giá Trị Cốt Lõi</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-12 h-12 bg-lottery-blue/20 rounded-full flex items-center justify-center">
                          <Shield className="w-6 h-6 text-lottery-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Tin Cậy & Chính Xác</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Chúng tôi cam kết cung cấp thông tin xổ số chính xác và đáng tin cậy 100%, giúp người chơi an tâm tra cứu và theo dõi kết quả.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-12 h-12 bg-lottery-blue/20 rounded-full flex items-center justify-center">
                          <Clock className="w-6 h-6 text-lottery-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Cập Nhật Kịp Thời</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Kết quả xổ số được cập nhật trong thời gian thực, ngay sau khi có thông báo chính thức từ các đài xổ số.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-12 h-12 bg-lottery-blue/20 rounded-full flex items-center justify-center">
                          <RefreshCw className="w-6 h-6 text-lottery-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Đổi Mới Liên Tục</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Chúng tôi không ngừng nghiên cứu và phát triển các tính năng mới, nhằm nâng cao trải nghiệm người dùng và đáp ứng nhu cầu đa dạng.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-12 h-12 bg-lottery-blue/20 rounded-full flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-lottery-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Chất Lượng Vượt Trội</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Với công nghệ AI tiên tiến, chúng tôi mang đến những công cụ và tính năng có chất lượng vượt trội so với các nền tảng xổ số thông thường.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-2xl font-bold mt-10 mb-6">Liên Hệ Với Chúng Tôi</h2>
                  
                  <p className="mb-4">
                    Nếu bạn có bất kỳ câu hỏi, góp ý hoặc yêu cầu hỗ trợ, đừng ngần ngại liên hệ với chúng tôi qua:
                  </p>
                  
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-6 mb-4">
                    <li>Email: info@aixoso.vn</li>
                    <li>Điện thoại: 1900-XX-XX-XX</li>
                    <li>Địa chỉ: 123 Đường Nguyễn Huệ, Quận 1, TP.HCM</li>
                  </ul>
                  
                  <p>
                    Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng phục vụ bạn từ 8:00 sáng đến 10:00 tối mỗi ngày, kể cả ngày lễ và cuối tuần.
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

export default AboutUs;
