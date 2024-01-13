"use client";

import React, { ChangeEvent, useState } from "react";
import { BatterGameData } from "../(domains)/playerType";

type gradeDataProps = {
  children: React.ReactNode;
  gradeData: BatterGameData[];
};

export default function DailyGrades({ children, gradeData }: gradeDataProps) {
  const startDate = new Date("2024-01-01").getTime();
  const endDate = new Date("2024-01-07").getTime();
  const [date, setDate] = useState<number>(startDate);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(Number(e.target.value));
  };

  const filterGrade = gradeData.filter((item) => {
    const itemDate = new Date(item.gameDate).toLocaleDateString();
    const filterDate = new Date(date).toLocaleDateString();
    return itemDate === filterDate;
  });

  return (
    <>
      {filterGrade.length > 0 ? (
        filterGrade.map((data) => (
          <>
            <div className="grid grid-cols-5 gap-4 mt-4">
              <div className="col-span-2 ml-3">{children}</div>
              <div className="grid grid-cols-subgrid gap-4 col-span-3">
                <div className="col-span-1">
                  <div className="border border-blue-400 rounded shadow-md">
                    <div className="flex justify-center">
                      <h1>avg</h1>
                    </div>
                    <div className="flex justify-center">
                      <p>{data.avg}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="border border-blue-400 rounded shadow-md">
                    <div className="flex justify-center">
                      <h1>hr</h1>
                    </div>
                    <div className="flex justify-center">
                      <p>{data.hr}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mr-3">
                  <div className="border border-blue-400 rounded shadow-md">
                    <div className="flex justify-center">
                      <h1>rbi</h1>
                    </div>
                    <div className="flex justify-center">
                      <p>{data.rbi}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="border border-blue-400 rounded shadow-md">
                    <div className="flex justify-center">
                      <h1>ops</h1>
                    </div>
                    <div className="flex justify-center">
                      <p>{data.ops}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="border border-blue-400 rounded shadow-md">
                    <div className="flex justify-center">
                      <h1>ops</h1>
                    </div>
                    <div className="flex justify-center">
                      <p>{data.ops}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mr-3">
                  <div className="border border-blue-400 rounded shadow-md">
                    <div className="flex justify-center">
                      <h1>ops</h1>
                    </div>
                    <div className="flex justify-center">
                      <p>{data.ops}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4">
              <div className="ml-3">
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>ops</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>{data.ops}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>ops</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>{data.ops}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>ops</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>{data.ops}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>ops</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>{data.ops}</p>
                  </div>
                </div>
              </div>
              <div className="mr-3">
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>ops</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>{data.ops}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      ) : (
        <>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="col-span-2 ml-3">{children}</div>
            <div className="grid grid-cols-subgrid gap-4 col-span-3">
              <div className="col-span-1">
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>avg</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>データがありません</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>hr</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>データがありません</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 mr-3">
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>rbi</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>データがありません</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>ops</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>データがありません</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>ops</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>データがありません</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 mr-3">
                <div className="border border-blue-400 rounded shadow-md">
                  <div className="flex justify-center">
                    <h1>ops</h1>
                  </div>
                  <div className="flex justify-center">
                    <p>データがありません</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="ml-3">
              <div className="border border-blue-400 rounded shadow-md">
                <div className="flex justify-center">
                  <h1>ops</h1>
                </div>
                <div className="flex justify-center">
                  <p>データがありません</p>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-blue-400 rounded shadow-md">
                <div className="flex justify-center">
                  <h1>ops</h1>
                </div>
                <div className="flex justify-center">
                  <p>データがありません</p>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-blue-400 rounded shadow-md">
                <div className="flex justify-center">
                  <h1>ops</h1>
                </div>
                <div className="flex justify-center">
                  <p>データがありません</p>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-blue-400 rounded shadow-md">
                <div className="flex justify-center">
                  <h1>ops</h1>
                </div>
                <div className="flex justify-center">
                  <p>データがありません</p>
                </div>
              </div>
            </div>
            <div className="mr-3">
              <div className="border border-blue-400 rounded shadow-md">
                <div className="flex justify-center">
                  <h1>ops</h1>
                </div>
                <div className="flex justify-center">
                  <p>データがありません</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
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
    </>
  );
}
