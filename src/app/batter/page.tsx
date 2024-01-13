import PlayerProfile from "../(components)/PlayerProfile";
import InfoGrades from "../(components)/InfoGrades";
import { pid } from "process";
import DailyGrades from "../(components)/DailyGrades";
import { Suspense } from "react";

export default async function Batter() {
  const gradeData = await InfoGrades(101);
  return (
    <Suspense>
      <DailyGrades gradeData={gradeData}>
        <PlayerProfile pId={101} />
      </DailyGrades>
    </Suspense>
  );
}
