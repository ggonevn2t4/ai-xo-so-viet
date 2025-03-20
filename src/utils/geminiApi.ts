
// Gemini API utility for AI functionalities

// API key for Gemini Pro 1.5
const GEMINI_API_KEY = "AIzaSyB9fWEACDCDoFtgMqk8Ke7SZ70VzO0t0NQ";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent";

export interface GeminiResponse {
  text: string;
  numbers: string[];
}

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

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error:", errorData);
      throw new Error("Không thể kết nối với dịch vụ AI. Vui lòng thử lại sau.");
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
        return {
          text: "Không thể phân tích giấc mơ. Vui lòng thử lại với mô tả chi tiết hơn.",
          numbers: ["07", "17", "27"]
        };
      }
    } catch (parseError) {
      console.error("Error parsing Gemini response:", parseError);
      return {
        text: "Không thể phân tích giấc mơ. Vui lòng thử lại với mô tả chi tiết hơn.",
        numbers: ["07", "17", "27"]
      };
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Có lỗi xảy ra khi kết nối với dịch vụ AI. Vui lòng thử lại sau.");
  }
};
