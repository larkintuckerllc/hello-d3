import React from 'react';

const DATA = [32, 57, 112, 293];
const App = () => (
  <svg width="720" height="120">
    { DATA.map((o, i) => (
      <circle
        key={i}
        cx={(i * 100) + 30}
        cy="60"
        r={Math.sqrt(o)}
        style={{ fill: 'steelblue' }}
      />
    ))}
  </svg>
);
export default App;
