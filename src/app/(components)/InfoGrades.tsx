import { BATTER_GRADE } from "../(domains)/constants";
import { getBatterGameData } from "../(lib)/getBatter";

type Props = {
  pId: number;
  gradeName: (typeof BATTER_GRADE)[number];
  gameDate: Date;
};

export default async function InfoGrades({ pId, gradeName, gameDate }: Props) {
  const gradeData = await getBatterGameData(pId);
  const filterGrade = gradeData.filter((item) => {
    const itemDate = new Date(item.gameDate).toLocaleDateString();
    const filterDate = new Date(gameDate).toLocaleDateString();
    return itemDate === filterDate;
  });
  console.log(filterGrade);
  return (
    <>
      {filterGrade.map((data, index) => (
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
