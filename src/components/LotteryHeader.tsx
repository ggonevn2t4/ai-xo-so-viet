
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const LotteryHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { title: 'Trang Chủ', path: '/' },
    { title: 'Tra Cứu Số', path: '/number-search' },
    { title: 'Giải Mã Giấc Mơ', path: '/dream-interpretation' },
    { title: 'Về Chúng Tôi', path: '/about-us' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-white/80 dark:bg-lottery-dark/80 shadow-md backdrop-blur-md' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2 animate-pulse-subtle">
            <div className="w-10 h-10 bg-lottery-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">XS</span>
            </div>
            <span className="font-serif text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lottery-blue to-lottery-light-blue">
              AI Xổ Số
            </span>
          </NavLink>

          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-all duration-300 hover:text-lottery-blue ${
                      isActive ? 'text-lottery-blue' : 'text-lottery-dark dark:text-white'
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
          )}

          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-full bg-lottery-light hover:bg-lottery-light-blue transition-all duration-300"
              aria-label="Tìm kiếm"
            >
              <Search className="w-5 h-5 text-lottery-dark" />
            </button>

            {isMobile && (
              <button
                onClick={toggleMenu}
                className="p-2 text-lottery-dark dark:text-white"
                aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-40 bg-white dark:bg-lottery-dark transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '64px' }}
        >
          <nav className="flex flex-col p-6 space-y-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-xl font-medium transition-all duration-300 ${
                    isActive ? 'text-lottery-blue' : 'text-lottery-dark dark:text-white'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default LotteryHeader;
