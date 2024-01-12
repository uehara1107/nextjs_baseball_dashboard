"use client";
import { PlayerData } from "../(domains)/playerType";
// データ取得関数（非同期）

async function getBatterData(pId: number): Promise<PlayerData[]> {
  const url = `http://172.24.64.1:8080/test/batter/${pId}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

type Props = {
  pId: number;
};

export default async function PlayerProfile({ pId }: Props) {
  const playerData = await getBatterData(pId);
  return (
    <>
      {playerData.map((player: PlayerData) => (
        <div className="border border-blue-400 rounded shadow-md">
          <div className="flex justify-center">
            <h1>基本情報</h1>
          </div>
          <div className="flex justify-center">
            <p>名前：{player.name}</p>
          </div>
          <div className="flex justify-center">
            <p>
              生年月日：
              {player.birthday
                ? new Date(player.birthday).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "不明"}
            </p>
          </div>
          <div className="flex justify-center">
            <p>
              身長：{player.height}㎝/体重：{player.weight}㎏
            </p>
          </div>
          <div className="flex justify-center">
            <p>投打：◯投げ◯打ち</p>
          </div>
        </div>
      ))}
    </>
  );
}
