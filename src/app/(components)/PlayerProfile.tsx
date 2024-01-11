import { PlayerData } from "../(domains)/playerType";
import { getBatterData } from "../(lib)/getBatter";

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
