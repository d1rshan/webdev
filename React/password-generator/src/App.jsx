import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [pwd, setPwd] = useState("");

  function generatePwd() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) str += "0123456789";
    if (includeSymbols) str += "#$@!&";

    let x = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      x += str.charAt(index);
    }
    setPwd(x);
  }

  useEffect(() => {
    generatePwd();
  }, [length, includeNumbers, includeSymbols]);
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="bg-white rounded-lg p-10 flex flex-col gap-4">
        <h2 className="text-4xl font-bold ">Password Generator</h2>
        <div className="border border-black rounded-lg flex overflow-hidden ">
          <input
            type="text"
            className="flex-1 outline-none p-2"
            value={pwd}
            readOnly
          />
          <button className="bg-black text-white p-2">Copy</button>
        </div>
        <div className="flex flex-col gap-2 border border-black rounded-lg p-4">
          <label htmlFor="length" className="text-[20px] font-bold">
            Length
          </label>
          <div className="flex ">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className=" flex-1 appearance-none bg-transparent [&::-webkit-slider-runnable-track]:bg-black
               [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full
               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5
               [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-green-500
               [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
               [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:transition
               [&::-webkit-slider-thumb]:hover:scale-110"
              onInput={(e) => setLength(e.target.value)}
            />
            <span className="ml-4"> {length}</span>
          </div>
        </div>
        <div className="flex flex-row justify-between  border border-black rounded-lg p-4">
          <label htmlFor="length" className="text-[20px] font-bold">
            Include numbers
          </label>
          <input
            type="checkbox"
            min={6}
            max={100}
            value={includeNumbers}
            onInput={() => setIncludeNumbers((prev) => !prev)}
          />
        </div>
        <div className="flex flex-row justify-between  border border-black rounded-lg p-4">
          <label htmlFor="length" className="text-[20px] font-bold">
            Include symbols
          </label>
          <input
            type="checkbox"
            min={6}
            max={100}
            value={includeSymbols}
            onInput={() => setIncludeSymbols((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
