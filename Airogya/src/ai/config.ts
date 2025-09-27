import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Get Gemini API key from environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

export function configureGenkit() {
  genkit({
    plugins: [
      googleAI({
        apiKey: GEMINI_API_KEY,
      }),
    ],
    model: 'googleai/gemini-2.5-flash',
  });
}
