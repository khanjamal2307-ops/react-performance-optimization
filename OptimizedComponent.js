import React, { useMemo } from "react";

function OptimizedComponent() {
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(5), []);

  return <h3>Result: {result}</h3>;
}

export default React.memo(OptimizedComponent);
