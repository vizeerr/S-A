import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';


export default async function getAiResponse(message) {

  try {
    const google = createGoogleGenerativeAI({
        apiKey: "AIzaSyA7WGhFBb_vvXQ_IZQOX-e5aKaAK_mrJlE", // Use your API key securely here
      });
    
    const { text } = await generateText({
        model: google('gemini-1.5-flash-latest'),
        prompt: message,
      });

    
    return text;
  } catch (error) {
    return error
  }
}
