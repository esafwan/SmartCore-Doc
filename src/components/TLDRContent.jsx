const TLDRContent = ({ onReadFull }) => (
  <div className="prose">
    <p>Traditional software development relies on rigid, pre-coded systems that are inflexible and costly to modify. The AI-Native paradigm proposes replacing these static systems with Large Language Models (LLMs) at every layer of the software stack, creating dynamic, instruction-driven applications that can adapt in real-time.</p>
    
    <h3>Key transformations:</h3>
    <ul>
      <li><strong>Interface Layer:</strong> Instead of fixed UIs, LLMs generate dynamic components and enable natural language interactions through voice and text.</li>
      <li><strong>Backend Layer:</strong> Replaces static APIs and hard-coded logic with fine-tuned LLMs that can interpret and execute tasks dynamically.</li>
      <li><strong>Interpreter Layer:</strong> Introduces sandbox execution environments where LLMs can run code and interact with tools based on plain English instructions.</li>
      <li><strong>Data Layer:</strong> Enables flexible integration with diverse data sources (databases, APIs, hardware) through natural language queries and modular plugins.</li>
    </ul>

    <h3>Benefits:</h3>
    <ul>
      <li>Greater flexibility to adapt to changing needs</li>
      <li>Faster development and feature deployment</li>
      <li>Better scalability through edge-deployed LLMs</li>
      <li>More intuitive user interactions through natural language</li>
      <li>Reduced need for manual coding and updates</li>
    </ul>

    <div className="mt-8 flex justify-center">
      <button 
        onClick={onReadFull}
        className="flex items-center gap-2 px-4 py-2 text-sm border rounded-md hover:bg-blue-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        Read Full Article
      </button>
    </div>
  </div>
);

export default TLDRContent; 