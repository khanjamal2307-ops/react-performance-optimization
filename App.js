import React, { useState } from "react";
import OptimizedComponent from "./OptimizedComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Performance Optimization</h2>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <OptimizedComponent />
    </div>
  );
}

export default App;
