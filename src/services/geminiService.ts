import { GoogleGenAI } from '@google/genai';
import { InstantFormData, StandardFormData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateInstantBlueprint(data: InstantFormData): Promise<string> {
  const creatorStr = data.creatorIdentity ? `Created By: ${data.createdBy}, Watermark Position: ${data.watermarkPosition}` : 'None';
  const prompt = `Create a high quality infographic blueprint based on the following configuration.

Topic: ${data.topic}
Style: ${data.theme}
Language Tone: ${data.tone}
Layout Type: Auto-suggested based on topic
Color Scheme:
Background: ${data.brandCustomization ? data.bgColor : 'Default Dark'}
Accent: ${data.brandCustomization ? data.accentColor : 'Default Neon'}
Dimension: ${data.format}
Creator Identity: ${creatorStr}

Output must include:
- title (string)
- layoutStructure (string)
- visualIconSuggestions (array of strings)
- contentHierarchy (string)
- storytellingFlow (string)
- sections (array of objects with title, content, and icon)

Format the output as a valid JSON object.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });
    return response.text || '{}';
  } catch (error) {
    console.error('Error generating blueprint:', error);
    throw error;
  }
}

export async function generateStandardBlueprint(data: StandardFormData): Promise<string> {
  const creatorStr = data.creatorIdentity ? `Created By: ${data.createdBy}, Watermark Position: ${data.watermarkPosition}` : 'None';
  const prompt = `Create a high quality infographic blueprint based on the following configuration.

Topic / Main Title: ${data.mainTitle}
Content Points: ${data.content}
Style: ${data.theme}
Language Tone: Professional
Layout Type: ${data.infographicType}
Color Scheme:
Background: ${data.brandCustomization ? data.bgColor : 'Default Dark'}
Accent: ${data.brandCustomization ? data.accentColor : 'Default Neon'}
Dimension: ${data.format}
Creator Identity: ${creatorStr}

Output must include:
- title (string)
- layoutStructure (string)
- visualIconSuggestions (array of strings)
- contentHierarchy (string)
- storytellingFlow (string)
- sections (array of objects with title, content, and icon)

Format the output as a valid JSON object.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });
    return response.text || '{}';
  } catch (error) {
    console.error('Error generating blueprint:', error);
    throw error;
  }
}
