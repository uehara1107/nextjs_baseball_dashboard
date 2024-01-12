"use client";
import PlayerProfile from "../(components)/PlayerProfile";
import InfoGrades from "../(components)/InfoGrades";
import { Suspense, useState } from "react";
import DemoSeekBar from "../(components)/DemoSeekBar";

export default function Batter() {
  const [date, setDate] = useState<number>(new Date("2024-01-01").getTime());
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">{date}</h1>
        <DemoSeekBar date={date} setDate={setDate} />
      </div>
      <Suspense fallback={<div>now loading...</div>}>
        <div className="grid grid-cols-5 gap-4 mt-4">
          <div className="col-span-2 ml-3">
            <PlayerProfile pId={101} />
          </div>
          <div className="col-span-1">
            <InfoGrades pId={101} gradeName="avg" gameDate={new Date(date)} />
          </div>
          <div className="col-span-1">
            <InfoGrades pId={101} gradeName="hr" gameDate={new Date(date)} />
          </div>
          <div className="col-span-1 mr-3">
            <InfoGrades pId={101} gradeName="rbi" gameDate={new Date(date)} />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-4">
          <div className="ml-3">
            <InfoGrades pId={101} gradeName="ops" gameDate={new Date(date)} />
          </div>
          <div>
            <InfoGrades pId={101} gradeName="ops" gameDate={new Date(date)} />
          </div>
          <div>
            <InfoGrades pId={101} gradeName="ops" gameDate={new Date(date)} />
          </div>
          <div>
            <InfoGrades pId={101} gradeName="ops" gameDate={new Date(date)} />
          </div>
          <div>
            <InfoGrades pId={101} gradeName="ops" gameDate={new Date(date)} />
          </div>
          <div className="mr-3">
            <InfoGrades pId={101} gradeName="ops" gameDate={new Date(date)} />
          </div>
        </div>
      </Suspense>
    </>
  );
}
