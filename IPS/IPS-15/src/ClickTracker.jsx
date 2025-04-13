import { useState } from "react";

function ClickTracker() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <h2>Click Tracker</h2>
      <span>Number of clicks: {count}</span>
      <div>
        <button onClick={handleClick}>Click me!</button>
        <button onClick={resetCount}>Reset count</button>
      </div>
    </div>
  );
}

export default ClickTracker;
