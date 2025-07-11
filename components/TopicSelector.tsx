
import React from 'react';
import { Topic } from '../types';

interface TopicSelectorProps {
  topics: Topic[];
  selectedTopicId: string | null;
  onSelectTopic: (id: string) => void;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ topics, selectedTopicId, onSelectTopic }) => {
  return (
    <fieldset>
      <legend className="sr-only">Topics</legend>
      <div className="space-y-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => onSelectTopic(topic.id)}
            className={`relative flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              selectedTopicId === topic.id
                ? 'bg-indigo-50 border-indigo-500 shadow-md'
                : 'bg-slate-50 border-slate-200 hover:border-indigo-300'
            }`}
          >
            <div className="flex items-center h-5 mt-1">
              <input
                id={topic.id}
                aria-describedby={`${topic.id}-description`}
                name="topic"
                type="radio"
                checked={selectedTopicId === topic.id}
                onChange={() => onSelectTopic(topic.id)}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
            </div>
            <div className="ml-3 text-sm flex-1">
              <label htmlFor={topic.id} className="font-bold text-slate-900 cursor-pointer">
                {topic.title}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default TopicSelector;
