
import { useState } from 'react';
import { Search } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

type SearchResult = {
  date: string;
  province: string;
  prize: string;
  numbers: string;
};

// Function to fetch lottery results data from a JSON file
const fetchLotteryData = async () => {
  // In a real app, this would be an API call to your backend
  try {
    const response = await fetch('/data/lottery-results.json');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching lottery data:', error);
    return [];
  }
};

// Function to search for matching numbers in the lottery results
const searchLotteryResults = (data: any[], searchNumber: string): SearchResult[] => {
  if (!data || !Array.isArray(data)) return [];
  
  const results: SearchResult[] = [];
  
  // Convert search number to string and ensure it's valid
  const searchPattern = searchNumber.toString().trim();
  if (searchPattern.length < 2) return [];

  // Search through the data for matching numbers
  data.forEach(day => {
    const date = day.date;
    
    // Search in Northern region (Miền Bắc)
    if (day.northern) {
      // Check special prize
      if (day.northern.special && day.northern.special.endsWith(searchPattern)) {
        results.push({
          date,
          province: 'Miền Bắc',
          prize: 'Giải Đặc Biệt',
          numbers: day.northern.special
        });
      }
      
      // Check first prize
      if (day.northern.first && day.northern.first.endsWith(searchPattern)) {
        results.push({
          date,
          province: 'Miền Bắc',
          prize: 'Giải Nhất',
          numbers: day.northern.first
        });
      }
      
      // Check other prizes (arrays)
      ['second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'].forEach(prizeKey => {
        if (day.northern[prizeKey] && Array.isArray(day.northern[prizeKey])) {
          day.northern[prizeKey].forEach((number: string) => {
            if (number.endsWith(searchPattern)) {
              results.push({
                date,
                province: 'Miền Bắc',
                prize: getPrizeName(prizeKey),
                numbers: number
              });
            }
          });
        }
      });
    }
    
    // Search in Central and Southern regions
    ['central', 'southern'].forEach(region => {
      if (day[region] && Array.isArray(day[region])) {
        day[region].forEach(provinceData => {
          const province = provinceData.province;
          
          // Check special prize
          if (provinceData.special && Array.isArray(provinceData.special)) {
            provinceData.special.forEach((number: string) => {
              if (number.endsWith(searchPattern)) {
                results.push({
                  date,
                  province,
                  prize: 'Giải Đặc Biệt',
                  numbers: number
                });
              }
            });
          }
          
          // Check other prizes
          ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'].forEach(prizeKey => {
            if (provinceData[prizeKey] && Array.isArray(provinceData[prizeKey])) {
              provinceData[prizeKey].forEach((number: string) => {
                if (number.endsWith(searchPattern)) {
                  results.push({
                    date,
                    province,
                    prize: getPrizeName(prizeKey),
                    numbers: number
                  });
                }
              });
            }
          });
        });
      }
    });
  });
  
  // Sort results by date (newest first)
  return results.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

// Helper function to get prize name in Vietnamese
const getPrizeName = (prizeKey: string): string => {
  const prizeNames: Record<string, string> = {
    'special': 'Giải Đặc Biệt',
    'first': 'Giải Nhất',
    'second': 'Giải Nhì',
    'third': 'Giải Ba',
    'fourth': 'Giải Tư',
    'fifth': 'Giải Năm',
    'sixth': 'Giải Sáu',
    'seventh': 'Giải Bảy',
    'eighth': 'Giải Tám'
  };
  
  return prizeNames[prizeKey] || prizeKey;
};

const NumberSearchForm = () => {
  const [searchNumber, setSearchNumber] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Use React Query to fetch lottery data
  const { data: lotteryData, isLoading: isDataLoading } = useQuery({
    queryKey: ['lotteryData'],
    queryFn: fetchLotteryData,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchNumber.trim() || searchNumber.length < 2) return;

    setHasSearched(true);
    
    // Search for matching results in the lottery data
    const searchResults = searchLotteryResults(lotteryData || [], searchNumber);
    setResults(searchResults);
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
            disabled={isDataLoading || searchNumber.length < 2}
          >
            {isDataLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            ) : (
              <Search className="w-5 h-5 mr-2" />
            )}
            Tra Cứu
          </button>
        </form>

        {hasSearched && !isDataLoading && (
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
