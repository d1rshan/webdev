import { useState } from "react";
import "./App.css";
function ClickTracker() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="click-tracker">
      <h2>Click Tracker</h2>
      <p>Number of clicks: {count}</p>
      <div className="btn-div">
        <button onClick={handleClick}>Click Me!</button>
        <button onClick={handleReset}>Reset Count</button>
      </div>
    </div>
  );
}
export default ClickTracker;
