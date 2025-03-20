
import { useState } from 'react';
import { Search } from 'lucide-react';

type SearchResult = {
  date: string;
  province: string;
  prize: string;
  numbers: string;
};

// Dummy data for search results
const DUMMY_SEARCH_RESULTS: SearchResult[] = [
  { date: '10/08/2023', province: 'Miền Bắc', prize: 'Giải Đặc Biệt', numbers: '12345' },
  { date: '09/08/2023', province: 'TP. HCM', prize: 'Giải Nhất', numbers: '12345' },
  { date: '08/08/2023', province: 'Đà Nẵng', prize: 'Giải Nhì', numbers: '12345' },
  { date: '07/08/2023', province: 'Miền Bắc', prize: 'Giải Ba', numbers: '12345' },
];

const NumberSearchForm = () => {
  const [searchNumber, setSearchNumber] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchNumber.trim() || searchNumber.length < 2) return;

    setIsLoading(true);
    setHasSearched(true);

    // Simulate API call
    setTimeout(() => {
      // Filter dummy data based on search number
      // In a real app, this would be a database or API call
      const filteredResults = searchNumber.includes('12345') 
        ? DUMMY_SEARCH_RESULTS 
        : [];
      
      setResults(filteredResults);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-card p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-6 text-center">Tra Cứu Số</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="number" className="block text-sm font-medium mb-2">
              Nhập dãy số cần tra cứu (từ 2 đến 6 chữ số)
            </label>
            <input
              id="number"
              type="text"
              value={searchNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                if (value.length <= 6) {
                  setSearchNumber(value);
                }
              }}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-lottery-blue focus:ring-2 focus:ring-lottery-blue/30 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              placeholder="Ví dụ: 123456"
              required
              minLength={2}
              maxLength={6}
            />
            <p className="text-sm text-gray-500 mt-1">
              Tìm kiếm 2-3 con số cuối hoặc toàn bộ dãy số. 
            </p>
          </div>
          
          <button
            type="submit"
            className="w-full bg-lottery-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
            disabled={isLoading || searchNumber.length < 2}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            ) : (
              <Search className="w-5 h-5 mr-2" />
            )}
            Tra Cứu
          </button>
        </form>

        {hasSearched && !isLoading && (
          <div className="mt-8 animate-slide-up">
            <h3 className="text-lg font-bold mb-4">Kết Quả Tra Cứu: {searchNumber}</h3>
            
            {results.length > 0 ? (
              <div className="bg-white/80 dark:bg-lottery-dark/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-4 py-2 text-left">Ngày</th>
                        <th className="px-4 py-2 text-left">Đài</th>
                        <th className="px-4 py-2 text-left">Giải</th>
                        <th className="px-4 py-2 text-left">Số Trúng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                        >
                          <td className="px-4 py-3">{result.date}</td>
                          <td className="px-4 py-3">{result.province}</td>
                          <td className="px-4 py-3">{result.prize}</td>
                          <td className="px-4 py-3 font-bold text-lottery-blue">{result.numbers}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white/80 dark:bg-lottery-dark/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <p>Không tìm thấy kết quả nào cho dãy số {searchNumber}. Vui lòng thử lại với dãy số khác.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberSearchForm;
