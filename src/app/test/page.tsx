"use client";
import SeekBar from "./TestSeekBar";
import DemoSeekBar from "../(components)/DemoSeekBar";
import { useState } from "react";

interface userDataProps {
  ID: number;
  Value: string;
  Date: Date;
}

const fetchUsers: () => Promise<userDataProps[]> = async () => {
  const res = await fetch("http://192.168.11.6:8080/test", {
    next: { revalidate: 0 },
  });
  const data = await res.json(); // 'await' を追加
  console.log(data);
  return data;
};

export default async function Test() {
  const [date, setDate] = useState<number>(new Date("2024-01-01").getTime());
  const userData = await fetchUsers();
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">{date}</h1>
        <DemoSeekBar date={date} setDate={setDate} />
      </div>
      <div>
        <SeekBar />
      </div>
      <div className="border border-blue-400 rounded">
        <div className="font-bold text-xl mb-2">poyo</div>
        <p className="text-gray-700 text-base">poyo</p>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <ul className="divide-y divide-gray-300">
          {userData.map((user) => (
            <li key={user.ID} className="p-4 hover:bg-gray-100">
              {user.Value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
