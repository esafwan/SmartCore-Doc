import React, { useState } from 'react';
import { Documentation, ParadigmDiagram } from './Documentation';

// Shared data for diagrams
export const sectionsData = {
  aiNative: [
    {
      title: "Interface",
      items: ["Voice-NLP", "NLP Text Input", "Preset UI", "Dynamic Generated & Cached UI"],
      borderColor: "border-red-200",
      bgColor: "bg-red-50"
    },
    {
      title: "Backend",
      items: ["Special-Purpose LLM (Trained on shadcn/orm/python)"],
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
      itemBorderColor: "border-yellow-300"
    },
    {
      title: "Interpreter",
      items: ["Sandboxed Terminal", "Python Exec", "Node.js Exec", "Internet Access / Puppeteer", "3rd Party Tools"],
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50"
    },
    {
      title: "Data",
      items: ["Databases", "Filesystem/S3", "Camera/Mic", "Other LLMs", "Hardware Interfaces"],
      borderColor: "border-gray-300",
      bgColor: "bg-gray-50"
    }
  ],
  traditional: [
    {
      title: "Interface",
      items: ["Static UI Components", "Predefined Inputs", "Fixed Layouts"],
      borderColor: "border-red-200",
      bgColor: "bg-red-50"
    },
    {
      title: "Backend",
      items: ["Monolithic Servers", "Fixed APIs", "Prewritten Business Logic"],
      borderColor: "border-green-200",
      bgColor: "bg-green-50"
    },
    {
      title: "Middleware",
      items: ["API Gateway", "Workflow Orchestration", "Static Middleware Logic"],
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50"
    },
    {
      title: "Data",
      items: ["Databases", "Filesystem", "Limited APIs", "Hardware Interfaces"],
      borderColor: "border-gray-300",
      bgColor: "bg-gray-50"
    }
  ]
};

const ParadigmView = ({ sections, title }) => (
  <ParadigmDiagram sections={sections} title={title} />
);

const SoftwareParadigms = () => {
  const [activeTab, setActiveTab] = useState('what');

  return (
    <div className="bg-gray-50 font-sans antialiased">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <a href="https://tridz.com" target="_blank" rel="noopener noreferrer">
            <img src="https://tridz.ae/images/tridz-logo.png" alt="Tridz Logo" className="h-8" />
          </a>
          <div className="text-right text-gray-600">
            <a href="mailto:contact@tridz.com" className="hover:text-blue-600">contact@tridz.com</a>
            <p>Dubai, UAE</p>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SmartCore: Dynamic Backends and Software Logic Powered by LLMs</h1>
          <p className="text-xl text-gray-600">
            Software architecture with adaptable, LLM-driven systems
          </p>
        </div>

        <div className="mb-6">
          <div className="border-b border-gray-200">
            <div className="flex gap-4">
              {[
                ['what', 'What is AI-Native?'],
                ['ai-native', 'AI-Native Stack'],
                ['traditional', 'Traditional Stack']
              ].map(([id, label]) => (
                <button
                  key={id}
                  className={`py-2 px-4 font-medium ${
                    activeTab === id
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border rounded-lg shadow-md p-4 bg-white pb-16 mb-16">
          {activeTab === 'what' && (
            <>
              <Documentation />              
            </>
          )}
          {activeTab === 'ai-native' && (
            <ParadigmView 
              sections={sectionsData.aiNative} 
              title="AI-Native Software Architecture"
            />
          )}
          {activeTab === 'traditional' && (
            <ParadigmView 
              sections={sectionsData.traditional} 
              title="Traditional Software Architecture"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SoftwareParadigms; 