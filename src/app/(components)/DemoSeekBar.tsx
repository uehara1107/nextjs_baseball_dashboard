// components/SeekBar.tsx
"use client";

import { ChangeEvent } from "react";

type Props = {
  date: number;
  setDate: (newDate: number) => void;
};
export default function DemoSeekBar({ date, setDate }: Props) {
  const startDate = new Date("2024-01-01").getTime();
  const endDate = new Date("2024-01-07").getTime();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const gameDate = Number(event.target.value);
    if (gameDate !== date) {
      // date の値が変更された場合のみ更新
      setDate(gameDate);
    }
  };

  return (
    <div className="p-4">
      <input
        type="range"
        min={startDate}
        max={endDate}
        value={date}
        onChange={handleChange}
        className="range range-primary"
      />
      <div>Selected Date: {new Date(date).toDateString()}</div>
    </div>
  );
}
