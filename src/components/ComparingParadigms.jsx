import React from 'react';
import { ParadigmDiagram } from './Documentation';
import { sectionsData } from './SoftwareParadigms';

const ComparingParadigms = () => {
  return (
    <>
      <h2 id='comparing-paradigms'><strong><span>Comparing Paradigms</span></strong></h2>
      <p><span>Below are two diagrams that compare the traditional software paradigm with the AI-native approach:</span></p>
      
      <h3 id='traditional-paradigm'><strong><span>Traditional Paradigm</span></strong></h3>
      <ParadigmDiagram sections={sectionsData.traditional} title="Traditional Software Architecture" />
      
      <h3 id='ai-native-paradigm'><strong><span>AI-Native Paradigm</span></strong></h3>
      <ParadigmDiagram sections={sectionsData.aiNative} title="AI-Native Software Architecture" />
      
      <hr />
      <h2 id='the-future'><strong><span>The Future</span></strong></h2>
      <p><span>As AI models become faster, cheaper, and more capable, the line between backend, middleware, and AI orchestration will blur. The AI-native paradigm marks a shift toward </span><strong><span>dynamic, instruction-driven systems</span></strong><span> that evolve alongside business needs.</span></p>
      <p><span>If you're building for the future, it's time to rethink software architecture with LLMs at the core.</span></p>
    </>
  );
};

export default ComparingParadigms; 