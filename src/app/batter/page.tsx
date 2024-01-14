import PlayerProfile from "./(components)/GetPlayerProfile";
import InfoGrades from "./(components)/GetBatterGameData";
import DailyGrades from "./(components)/DailyGrades";
import { Suspense } from "react";

export default async function Batter() {
  const gradeData = await InfoGrades(101);
  return (
    <Suspense fallback={<p className="mt-4">Loading...</p>}>
      <DailyGrades gradeData={gradeData}>
        <PlayerProfile pId={101} />
      </DailyGrades>
    </Suspense>
  );
}
