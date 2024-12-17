import React from 'react';
import data from '../data/data.html?raw';
import ComparingParadigms from './ComparingParadigms';
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
  return (
    <div className="documentation prose max-w-none pt-24">
      <div dangerouslySetInnerHTML={{ __html: data }} />
      <ComparingParadigms />
    </div>
  );
};

export { Documentation, ParadigmDiagram }; 