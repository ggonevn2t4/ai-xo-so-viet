
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
  
  // Simple dream interpretation based on word count
  const wordCount = dreamDescription.split(/\s+/).length;
  let interpretation = '';
  
  if (wordCount < 5) {
    interpretation = "Giấc mơ ngắn gọn của bạn thường liên quan đến những mong muốn mãnh liệt trong hiện tại.";
  } else if (wordCount < 15) {
    interpretation = "Giấc mơ của bạn phản ánh trạng thái cảm xúc hiện tại và có thể mang đến sự may mắn trong tương lai gần.";
  } else {
    interpretation = "Giấc mơ chi tiết này phản ánh sự phức tạp trong tâm trí bạn và những điều sâu sắc từ tiềm thức.";
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
      Hãy phân tích giấc mơ sau đây và đưa ra 3 con số may mắn (từ 00-99) dựa trên nội dung của giấc mơ. 
      Hãy phân tích ngắn gọn về ý nghĩa của giấc mơ và cách nó liên quan đến các con số. 
      Trả về kết quả dưới dạng JSON với cấu trúc: {"interpretation": "phân tích ngắn gọn về giấc mơ", "numbers": ["số1", "số2", "số3"]}
      
      Giấc mơ cần phân tích: "${dreamDescription}"
    `;

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
          temperature: 0.4,
          topP: 0.95,
          topK: 40,
        }
      })
    });

    // Handle quota exceeded error (429) or other errors
    if (!response.ok) {
      console.warn(`Gemini API returned status ${response.status}. Using fallback interpretation.`);
      return generateFallbackInterpretation(dreamDescription);
    }

    const data = await response.json();
    
    // Extract the text response from Gemini
    const textResponse = data.candidates[0].content.parts[0].text;
    
    // Parse the JSON response from the text
    try {
      const jsonMatch = textResponse.match(/\{.*\}/s);
      if (jsonMatch) {
        const parsedResponse = JSON.parse(jsonMatch[0]);
        return {
          text: parsedResponse.interpretation,
          numbers: parsedResponse.numbers
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
