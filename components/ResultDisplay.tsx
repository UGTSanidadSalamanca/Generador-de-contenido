
import React from 'react';
import { LoadingSpinner } from './icons/Icons';
import MarkdownRenderer from './MarkdownRenderer';

interface ResultDisplayProps {
  content: string;
  isLoading: boolean;
  error: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ content, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <LoadingSpinner className="w-12 h-12 text-indigo-600" />
        <p className="mt-4 text-lg font-semibold text-slate-700 animate-pulse">
          Generando ideas...
        </p>
        <p className="text-slate-500">El asistente creativo está trabajando.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center bg-red-50 p-6 rounded-lg border border-red-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <h3 className="mt-2 text-xl font-bold text-red-800">¡Oops! Algo salió mal</h3>
        <p className="mt-2 text-sm text-red-700">{error}</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center text-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-slate-700">Las ideas generadas aparecerán aquí</h3>
        <p className="mt-1 max-w-sm">Selecciona un tema y haz clic en "Generar Ideas" para comenzar a crear contenido.</p>
      </div>
    );
  }

  return (
    <div className="prose prose-slate max-w-none h-full overflow-y-auto">
       <MarkdownRenderer content={content} />
    </div>
  );
};

export default ResultDisplay;
