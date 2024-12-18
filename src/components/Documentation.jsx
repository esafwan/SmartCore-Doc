import React, { useState } from 'react';
import data from '../data/data.html?raw';
import TLDRContent from './TLDRContent';
import '../styles/Documentation.css';

const ParadigmDiagram = ({ sections, title }) => (
  <div className="border rounded-lg shadow-md p-4 bg-white mb-8">
    {sections.map((section, index) => (
      <div key={index} className="mb-4">
        <div className={`border ${section.borderColor} ${section.bgColor} rounded-lg p-4`}>
          <h2 className="text-lg font-semibold mb-2 text-gray-800">{section.title}</h2>
          <div className="flex flex-wrap gap-4">
            {section.items.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className={`border ${section.itemBorderColor || 'border-purple-300'} rounded-md px-4 py-2 text-gray-700`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Documentation = () => {
  const [showTLDR, setShowTLDR] = useState(false);

  return (
    <div className="documentation prose max-w-none pt-24">
      <div className="flex justify-between items-start mb-6 gap-4">
        <h1 className="text-2xl font-bold flex-1">The AI-Native Paradigm: Replacing Traditional Software Models with LLMs</h1>
        <button 
          onClick={() => setShowTLDR(!showTLDR)}
          className="flex items-center gap-2 px-4 py-1.5 text-sm border rounded-md hover:bg-blue-50 whitespace-nowrap min-w-[120px] justify-center"
        >
          {showTLDR ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              In Detail
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
              </svg>
              In Short
            </>
          )}
        </button>
      </div>

      {showTLDR ? (
        <TLDRContent onReadFull={() => setShowTLDR(false)} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: data }} />
      )}
    </div>
  );
};

export { Documentation, ParadigmDiagram }; 