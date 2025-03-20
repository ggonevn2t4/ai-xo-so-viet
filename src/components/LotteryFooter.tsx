
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const LotteryFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lottery-dark text-white pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-slide-up" style={{ animationDelay: '0ms' }}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-lottery-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">XS</span>
              </div>
              <span className="font-serif text-xl font-bold">AI Xổ Số</span>
            </div>
            <p className="text-gray-300 mb-4">
              Hệ thống AI xổ số thông minh, cập nhật kết quả xổ số miền Bắc, miền Trung, miền Nam nhanh chóng và chính xác.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-lottery-blue transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lottery-blue transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lottery-blue transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lottery-blue transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="font-serif text-lg font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-lottery-blue transition-colors duration-300">
                  Trang Chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/number-search" className="text-gray-300 hover:text-lottery-blue transition-colors duration-300">
                  Tra Cứu Số
                </NavLink>
              </li>
              <li>
                <NavLink to="/dream-interpretation" className="text-gray-300 hover:text-lottery-blue transition-colors duration-300">
                  Giải Mã Giấc Mơ
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="text-gray-300 hover:text-lottery-blue transition-colors duration-300">
                  Về Chúng Tôi
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="font-serif text-lg font-bold mb-4">Liên Hệ</h3>
            <p className="text-gray-300 mb-2">Email: info@aixoso.vn</p>
            <p className="text-gray-300 mb-2">Điện thoại: 1900-XX-XX-XX</p>
            <p className="text-gray-300">
              Địa chỉ: 123 Đường Nguyễn Huệ, <br />
              Quận 1, TP.HCM
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} AI Xổ Số. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default LotteryFooter;
