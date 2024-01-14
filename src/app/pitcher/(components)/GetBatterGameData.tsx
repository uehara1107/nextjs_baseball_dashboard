import { BatterGameData } from "../../(domains)/playerType";

const getBatterGameData: (pId: number) => Promise<BatterGameData[]> = async (
  pId
) => {
  try {
    const response = await fetch(
      `http://172.24.64.1:8080/test/batter/grade/${pId}`
    );
    if (!response.ok) {
      throw new Error("ネットワークレスポンスが異常です。");
    }
    const data: BatterGameData[] = await response.json();
    // ここで data の型をチェックするコードを追加することもできます
    console.log(data);
    return data;
  } catch (error) {
    console.error("データの取得に失敗しました:", error);
    throw error; // エラーを再スローして、この関数を呼び出す側で処理を行えるようにします
  }
};

export default async function InfoGrades(pId: number) {
  const gradeData = await getBatterGameData(pId);
  return gradeData;
}
