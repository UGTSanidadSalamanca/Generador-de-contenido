
import React, { useState, useCallback } from 'react';
import { generateContentIdeas } from './services/geminiService';
import { TOPICS } from './constants';
import { Topic } from './types';
import TopicSelector from './components/TopicSelector';
import ResultDisplay from './components/ResultDisplay';
import { BrainIcon, SparklesIcon } from './components/icons/Icons';

const App: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateClick = useCallback(async () => {
    if (!selectedTopicId) {
      setError('Por favor, selecciona un tema primero.');
      return;
    }

    const selectedTopic = TOPICS.find(t => t.id === selectedTopicId);
    if (!selectedTopic) {
      setError('El tema seleccionado no es válido.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedContent('');

    try {
      const content = await generateContentIdeas(selectedTopic);
      setGeneratedContent(content);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ocurrió un error desconocido.';
      setError(`Error al generar contenido: ${errorMessage}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [selectedTopicId]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-3">
            <SparklesIcon className="w-10 h-10 text-indigo-500" />
            Generador de Contenido
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Ideas para infografías y vídeos sobre la sanidad en Castilla y León
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Control Panel */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 flex flex-col">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Selecciona un Tema</h2>
            <div className="flex-grow">
              <TopicSelector
                topics={TOPICS}
                selectedTopicId={selectedTopicId}
                onSelectTopic={setSelectedTopicId}
              />
            </div>
            <button
              onClick={handleGenerateClick}
              disabled={!selectedTopicId || isLoading}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? (
                'Generando...'
              ) : (
                <>
                  <BrainIcon className="w-5 h-5" />
                  <span>2. Generar Ideas</span>
                </>
              )}
            </button>
          </div>

          {/* Result Panel */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
             <ResultDisplay
                content={generatedContent}
                isLoading={isLoading}
                error={error}
              />
          </div>
        </main>
        
        <footer className="text-center mt-12 text-slate-500 text-sm">
            <p>Creado con React, Tailwind CSS y la API de Gemini.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
