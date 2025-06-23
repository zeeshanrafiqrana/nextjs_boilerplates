// src/app/test-lint.tsx
import React from 'react';

const TestComponent = ({}) => {  // Empty props pattern
  const unusedVar = 'test';     // Unused variable
  
  return (
    <div> 
      <img src="/test.png" />   // Missing alt attribute
      {[1,2,3].map(number => (  // Missing key prop
        <span>{number}</span>
      ))}
    </div>
  );
};

export default TestComponent;