import Image from "next/image";
import PlayerProfile from "../components/PlayerProfile";
import InfoGrades from "../components/InfoGrades";

export default function Batter() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div className="col-span-2 ml-3">
          <PlayerProfile />
        </div>
        <div className="col-span-1">
          <InfoGrades />
        </div>
        <div className="col-span-1">
          <InfoGrades />
        </div>
        <div className="col-span-1 mr-3">
          <InfoGrades />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <div className="ml-3">
          <InfoGrades />
        </div>
        <div>
          <InfoGrades />
        </div>
        <div>
          <InfoGrades />
        </div>
        <div>
          <InfoGrades />
        </div>
        <div>
          <InfoGrades />
        </div>
        <div className="mr-3">
          <InfoGrades />
        </div>
      </div>
    </>
  );
}
