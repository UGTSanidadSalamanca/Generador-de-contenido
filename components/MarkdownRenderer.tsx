import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // This helper parses a single line for bold text.
  const parseBold = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };
  
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentListItems: React.ReactNode[] = [];

  const flushList = () => {
    if (currentListItems.length > 0) {
      elements.push(<ul key={`ul-${elements.length}`} className="space-y-1 my-4">{currentListItems}</ul>);
      currentListItems = [];
    }
  };

  lines.forEach((line, index) => {
    // Headings
    if (line.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={index} className="text-2xl font-bold mt-6 mb-2 text-slate-900 border-b pb-2">{parseBold(line.substring(3))}</h2>);
      return;
    }
    if (line.startsWith('# ')) {
      flushList();
      elements.push(<h1 key={index} className="text-3xl font-bold mt-4 mb-2 text-indigo-700">{parseBold(line.substring(2))}</h1>);
      return;
    }

    // Unordered list items
    if (line.trim().startsWith('- ')) {
      const itemContent = line.substring(line.indexOf('-') + 1).trim();
      currentListItems.push(
        <li key={index} className="ml-5 my-1 list-disc">
          {parseBold(itemContent)}
        </li>
      );
      return;
    }

    // If we are here, it's not a list item, so flush any existing list.
    flushList();
    
    // Simple paragraph (if not empty)
    if (line.trim() !== '') {
        elements.push(<p key={index} className="my-3">{parseBold(line)}</p>)
    }
  });

  flushList(); // Flush any remaining list items at the end

  return <>{elements}</>;
};

export default MarkdownRenderer;
