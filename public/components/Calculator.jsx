import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "="
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 w-[360px]">
        
        {/* Display */}
        <div className="bg-black/40 text-white text-right text-3xl font-light p-4 rounded-xl mb-6 break-all">
          {input || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleClick(btn)}
              className={`py-4 rounded-xl text-lg font-medium transition-all duration-200
              ${btn === "=" 
                ? "col-span-4 bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/30 text-white" 
                : btn === "C"
                ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30 text-white"
                : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
