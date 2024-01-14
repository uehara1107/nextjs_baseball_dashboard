import { PlayerData } from "../../(domains)/playerType";

const getBatterData: (pId: number) => Promise<PlayerData[]> = async (pId) => {
  try {
    const response = await fetch(`http://172.24.64.1:8080/test/batter/${pId}`);
    if (!response.ok) {
      throw new Error("ネットワークレスポンスが異常です。");
    }
    const data: PlayerData[] = await response.json();
    // ここで data の型をチェックするコードを追加することもできます
    console.log(data);
    return data;
  } catch (error) {
    console.error("データの取得に失敗しました:", error);
    throw error; // エラーを再スローして、この関数を呼び出す側で処理を行えるようにします
  }
};

type Props = {
  pId: number;
};

export default async function PlayerProfile({ pId }: Props) {
  const playerData = await getBatterData(pId);
  return (
    <>
      {playerData.map((player) => (
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
