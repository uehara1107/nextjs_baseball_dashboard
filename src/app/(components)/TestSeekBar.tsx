// components/SeekBar.tsx
"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const SeekBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <div className="w-full px-4">
      <input
        type="range"
        min="0"
        max="5000000000000000"
        value={value}
        className="range range-primary"
        onChange={handleChange}
      />
      <div className="text-center">{value}円</div>
      <div className="text-center">
        {Math.floor((value / 5000000000000000) * 100)}%
      </div>
    </div>
  );
};

export default SeekBar;
