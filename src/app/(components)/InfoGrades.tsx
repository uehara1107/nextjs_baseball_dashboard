"use client";

import React, { useState, useEffect } from "react";
import { BATTER_GRADE } from "../(domains)/constants";
import { BatterGameData } from "../(domains)/playerType";

// データ取得関数（非同期）
async function getBatterGameData(pId: number): Promise<BatterGameData[]> {
  const url = `http://172.24.64.1:8080/test/batter/grade/${pId}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

type InfoGradesProps = {
  pId: number;
  gradeName: (typeof BATTER_GRADE)[number];
  gameDate: Date;
};

// InfoGrades コンポーネント
export default function InfoGrades({
  pId,
  gradeName,
  gameDate,
}: InfoGradesProps) {
  const [gradeData, setGradeData] = useState<BatterGameData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBatterGameData(pId);
        setGradeData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pId, gameDate]);

  const filteredGradeData = gradeData.filter((item: BatterGameData) => {
    const itemDate = new Date(item.gameDate).toLocaleDateString();
    const filterDate = new Date(gameDate).toLocaleDateString();
    return itemDate === filterDate;
  });

  return (
    <>
      {filteredGradeData.map((data, index) => (
        <div key={index} className="border border-blue-400 rounded shadow-md">
          <div className="flex justify-center">
            <h1>{gradeName}</h1>
          </div>
          <div className="flex justify-center">
            <p>{data[gradeName]}</p> {/* ブラケット記法を使用 */}
          </div>
        </div>
      ))}
    </>
  );
}
