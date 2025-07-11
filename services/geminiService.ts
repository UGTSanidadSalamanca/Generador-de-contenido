import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Topic } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set. Please set it in your environment.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const generatePrompt = (topic: Topic): string => {
  return `
Rol: Eres un experto creador de contenido, especializado en la síntesis de información técnica y compleja para audiencias diversas. Hablas y escribes en español.

Objetivo: Generar dos ideas de contenido detalladas y estructuradas a partir de la misma información: una para una infografía y otra para un guion de video corto para redes sociales (ej. TikTok, Reels). Ambas propuestas deben explorar y explicar los aspectos clave del tema proporcionado, basándose exclusivamente en la información que se te da. Tu respuesta debe ser clara, concisa y bien estructurada, separando claramente la propuesta de infografía de la del guion.

Instrucciones Generales:
- Formato de Salida: Primero, presenta la propuesta para la **Infografía**, con un título, una descripción y el contenido estructurado en puntos. Segundo, presenta la propuesta para el **Guion de Video Corto**, con un título, una descripción y el contenido estructurado en escenas (ej. "Escena 1: [Visual] - [Audio/Texto en pantalla]"). Utiliza formato Markdown para toda la salida (ej. ## Título, **Negrita**, - Elemento de lista).
- Fundamentación: Basa cada punto de tu propuesta estrictamente en la información que te doy. No inventes ni añadas datos externos.
- Precisión: Sé exacto con los detalles proporcionados.

---
**INFORMACIÓN DISPONIBLE (Fuente de Datos Única):**

**Tema Principal:** "${topic.title}"

**Detalles Clave del Tema:**
${topic.details}
---

**Tu Tarea:**
Basándote ESTRICTAMENTE en la información anterior, genera dos propuestas de contenido sobre el tema "${topic.title}":
1. Una estructura detallada para una infografía.
2. Un guion conciso para un video corto (formato vertical para redes sociales).

Sigue todas las instrucciones de rol y formato. La respuesta debe estar en español y claramente dividida en dos secciones.
`;
};

export const generateContentIdeas = async (topic: Topic): Promise<string> => {
  const prompt = generatePrompt(topic);
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-04-17',
        contents: prompt
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        if(error.message.includes('API key not valid')) {
            throw new Error('La clave de API no es válida. Por favor, verifica la configuración.');
        }
         throw new Error(`Error de la API: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while communicating with the AI model.");
  }
};