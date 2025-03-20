
// Gemini API utility for AI functionalities

// API key for Gemini Pro 1.5
const GEMINI_API_KEY = "AIzaSyD3ih3kH9V1CSqmWHRo54xBINJpi9XJky4";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent";

export interface GeminiResponse {
  text: string;
  numbers: string[];
}

// Fallback interpretation function when API is unavailable
const generateFallbackInterpretation = (dreamDescription: string): GeminiResponse => {
  // Simple algorithm to generate consistent numbers based on dream description
  let hash = 0;
  for (let i = 0; i < dreamDescription.length; i++) {
    hash = ((hash << 5) - hash) + dreamDescription.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  
  // Generate 3 numbers between 00-99 based on the hash
  const number1 = Math.abs(hash % 100).toString().padStart(2, '0');
  const number2 = Math.abs((hash + 33) % 100).toString().padStart(2, '0');
  const number3 = Math.abs((hash + 66) % 100).toString().padStart(2, '0');
  
  // Generate a more contextualized interpretation based on dream content
  const wordCount = dreamDescription.split(/\s+/).length;
  const containsKeywords = (keywords: string[]) => 
    keywords.some(keyword => dreamDescription.toLowerCase().includes(keyword.toLowerCase()));
  
  let interpretation = '';
  
  if (containsKeywords(['tiền', 'vàng', 'giàu', 'của cải'])) {
    interpretation = "Giấc mơ về tiền bạc thường liên quan đến mong muốn an toàn tài chính. Có thể báo hiệu cơ hội tài chính sắp đến hoặc lo lắng về tình hình tài chính hiện tại của bạn.";
  } else if (containsKeywords(['nước', 'biển', 'sông', 'hồ'])) {
    interpretation = "Nước trong giấc mơ thường tượng trưng cho cảm xúc và tiềm thức. Nước yên bình thể hiện sự thanh thản, trong khi nước dữ dội có thể phản ánh cảm xúc đang xáo trộn.";
  } else if (containsKeywords(['nhà', 'nhà cửa', 'căn hộ'])) {
    interpretation = "Mơ thấy nhà cửa thường liên quan đến cảm giác an toàn và bản ngã của bạn. Một ngôi nhà mới có thể báo hiệu sự khởi đầu mới, trong khi nhà cũ có thể gợi nhớ về quá khứ.";
  } else if (containsKeywords(['rắn', 'trăn', 'rồng'])) {
    interpretation = "Rắn trong giấc mơ thường tượng trưng cho sự biến đổi và tái sinh. Nó có thể báo hiệu về những thay đổi sâu sắc đang xảy ra trong cuộc sống của bạn.";
  } else if (containsKeywords(['bay', 'trên không', 'phi cơ'])) {
    interpretation = "Bay trong giấc mơ thường liên quan đến cảm giác tự do, thoát khỏi giới hạn. Nó cũng có thể phản ánh mong muốn vượt qua khó khăn hoặc đạt được tầm nhìn rộng lớn hơn.";
  } else if (containsKeywords(['chạy', 'theo đuổi', 'trốn chạy'])) {
    interpretation = "Chạy trốn trong giấc mơ thường liên quan đến việc tránh né một tình huống hoặc cảm xúc trong đời thực. Đây có thể là dấu hiệu của căng thẳng hoặc lo lắng.";
  } else if (containsKeywords(['người thân', 'gia đình', 'cha mẹ', 'con cái'])) {
    interpretation = "Mơ thấy người thân thường liên quan đến mối quan hệ gia đình. Nó có thể phản ánh tình cảm sâu sắc, mong muốn gắn kết hoặc nỗi nhớ về họ.";
  } else if (wordCount < 5) {
    interpretation = "Giấc mơ ngắn gọn của bạn thường liên quan đến những mong muốn mãnh liệt trong hiện tại. Hãy chú ý đến chi tiết hơn để có thể giải mã chính xác hơn.";
  } else if (wordCount < 15) {
    interpretation = "Giấc mơ của bạn phản ánh trạng thái cảm xúc hiện tại và có thể mang đến sự may mắn trong tương lai gần. Những con số được chọn dựa trên năng lượng của giấc mơ này.";
  } else {
    interpretation = "Giấc mơ chi tiết này phản ánh sự phức tạp trong tâm trí bạn và những điều sâu sắc từ tiềm thức. Các con số được chọn dựa trên những yếu tố nổi bật trong tường thuật của bạn.";
  }
  
  return {
    text: interpretation,
    numbers: [number1, number2, number3]
  };
};

/**
 * Interprets a dream using Gemini API and returns lucky numbers
 * @param dreamDescription The user's dream description
 * @returns Text interpretation and lucky numbers
 */
export const interpretDreamWithGemini = async (dreamDescription: string): Promise<GeminiResponse> => {
  try {
    const prompt = `
      Hãy đóng vai một chuyên gia về giải mộng và phân tích giấc mơ sau đây, sau đó đưa ra 3 con số may mắn (từ 00-99) dựa trên nội dung của giấc mơ. 
      
      Hãy phân tích ý nghĩa của giấc mơ theo văn hóa Việt Nam và phương Đông, cách nó liên quan đến các con số may mắn. Giải thích mối liên hệ giữa nội dung giấc mơ và các con số được chọn.
      
      Trả về kết quả dưới dạng JSON với cấu trúc: {"interpretation": "phân tích ngắn gọn về giấc mơ", "numbers": ["số1", "số2", "số3"]}
      
      Giấc mơ cần phân tích: "${dreamDescription}"
    `;

    console.log("Sending request to Gemini API...");
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.5,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 1000,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    // Handle quota exceeded error (429) or other errors
    if (!response.ok) {
      console.warn(`Gemini API returned status ${response.status}. Using fallback interpretation.`);
      return generateFallbackInterpretation(dreamDescription);
    }

    const data = await response.json();
    console.log("Received response from Gemini API:", data);
    
    // Extract the text response from Gemini
    const textResponse = data.candidates[0].content.parts[0].text;
    
    // Parse the JSON response from the text
    try {
      const jsonMatch = textResponse.match(/\{.*\}/s);
      if (jsonMatch) {
        const parsedResponse = JSON.parse(jsonMatch[0]);
        
        // Ensure numbers are formatted as two digits
        const formattedNumbers = parsedResponse.numbers.map((num: string | number) => {
          const numStr = String(num);
          return numStr.length === 1 ? `0${numStr}` : numStr.substring(0, 2);
        });
        
        return {
          text: parsedResponse.interpretation,
          numbers: formattedNumbers
        };
      } else {
        // Fallback if the response isn't in the expected format
        console.warn("Couldn't extract JSON from Gemini response. Using fallback interpretation.");
        return generateFallbackInterpretation(dreamDescription);
      }
    } catch (parseError) {
      console.error("Error parsing Gemini response:", parseError);
      return generateFallbackInterpretation(dreamDescription);
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return generateFallbackInterpretation(dreamDescription);
  }
};
