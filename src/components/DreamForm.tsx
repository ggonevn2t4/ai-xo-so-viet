
import { useState } from 'react';
import { Search } from 'lucide-react';
import { interpretDreamWithGemini } from '@/utils/geminiApi';
import { useToast } from '@/components/ui/use-toast';

const DreamForm = () => {
  const [dreamText, setDreamText] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [interpretation, setInterpretation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dreamText.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    try {
      // Use Gemini API to interpret the dream
      const geminiResponse = await interpretDreamWithGemini(dreamText);
      
      setResults(geminiResponse.numbers);
      setInterpretation(geminiResponse.text);
      setIsLoading(false);
    } catch (error) {
      console.error("Error interpreting dream:", error);
      toast({
        title: "Lỗi",
        description: "Không thể kết nối với dịch vụ AI. Vui lòng thử lại sau.",
        variant: "destructive",
      });
      setIsLoading(false);
      setResults(["07", "17", "27"]); // Default numbers if API fails
      setInterpretation("Không thể phân tích giấc mơ. Vui lòng thử lại sau.");
    }
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
                <p className="mb-3">{interpretation}</p>
                
                <p className="font-medium mt-4 mb-2">Các con số may mắn:</p>
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
