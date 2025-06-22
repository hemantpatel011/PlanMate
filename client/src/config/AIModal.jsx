import { GoogleGenerativeAI } from '@google/generative-ai';

const ai = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = 'gemini-1.5-flash';
const generationConfig = {
  temperature: 1,
};

const generateTravelPlan = async (promptText) => {
  try {
    const modelInstance = ai.getGenerativeModel({ model });

    const result = await modelInstance.generateContent({
      contents: [{ role: 'user', parts: [{ text: promptText }] }],
      generationConfig,
    });

    const text = await result.response.text();
    
    const match = text.match(/```json([\s\S]*?)```/);
    if (match && match[1]) {
      return JSON.parse(match[1]);
    } else {
      throw new Error('No JSON found in response');
    }
  } catch (err) {
    console.error('AI Error:', err);
    throw err;
  }
};

export default generateTravelPlan;  
