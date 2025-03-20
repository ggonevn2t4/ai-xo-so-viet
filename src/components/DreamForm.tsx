
import { useState } from 'react';
import { Search } from 'lucide-react';

// Dummy data for dream interpretation
const DREAM_INTERPRETATIONS = {
  'mèo': ['12', '23', '45'],
  'chó': ['11', '22', '33'],
  'cá': ['15', '27', '39'],
  'rắn': ['19', '29', '49'],
  'bò': ['07', '17', '71'],
  'trâu': ['03', '35', '53'],
  'mưa': ['04', '40', '44'],
  'nắng': ['05', '50', '55'],
  'sấm sét': ['06', '60', '66'],
  'bão': ['08', '80', '88'],
  'nhà': ['01', '10', '11'],
  'cây': ['09', '90', '99'],
  'hoa': ['16', '61', '46'],
  'người quen': ['28', '82', '38'],
  'tiền': ['13', '31', '83'],
};

const DreamForm = () => {
  const [dreamText, setDreamText] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dreamText.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    // Simulate API call
    setTimeout(() => {
      // Look up interpretation in our dummy data
      const lowerDream = dreamText.toLowerCase();
      const numbers = Object.keys(DREAM_INTERPRETATIONS).some(key => lowerDream.includes(key))
        ? Object.keys(DREAM_INTERPRETATIONS)
            .filter(key => lowerDream.includes(key))
            .flatMap(key => DREAM_INTERPRETATIONS[key as keyof typeof DREAM_INTERPRETATIONS])
        : ['07', '17', '27']; // Default numbers if no match

      setResults(numbers);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-card p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-6 text-center">Giải Mã Giấc Mơ</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="dream" className="block text-sm font-medium mb-2">
              Mô tả giấc mơ của bạn
            </label>
            <textarea
              id="dream"
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              className="w-full h-32 px-4 py-3 rounded-xl border border-gray-300 focus:border-lottery-blue focus:ring-2 focus:ring-lottery-blue/30 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
              placeholder="Ví dụ: Tôi mơ thấy một con mèo đen đang đuổi theo con chuột..."
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-lottery-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            ) : (
              <Search className="w-5 h-5 mr-2" />
            )}
            Giải Mã Ngay
          </button>
        </form>

        {hasSearched && !isLoading && (
          <div className="mt-8 animate-slide-up">
            <h3 className="text-lg font-bold mb-4">Kết Quả Giải Mã:</h3>
            
            {results.length > 0 ? (
              <div className="bg-white/80 dark:bg-lottery-dark/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="mb-3">Dựa vào giấc mơ của bạn, đây là các con số may mắn:</p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {results.map((number, index) => (
                    <div 
                      key={index} 
                      className="lottery-number-special flex items-center justify-center"
                    >
                      {number}
                    </div>
                  ))}
                </div>
                
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  Ghi chú: Các con số này được dự đoán dựa trên AI phân tích giấc mơ và có thể thay đổi.
                </p>
              </div>
            ) : (
              <div className="bg-white/80 dark:bg-lottery-dark/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <p>Không tìm thấy kết quả phù hợp với giấc mơ của bạn. Vui lòng thử lại với mô tả chi tiết hơn.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DreamForm;
