import PlayerProfile from "../(components)/PlayerProfile";
import InfoGrades from "../(components)/InfoGrades";

export default async function Batter() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div className="col-span-2 ml-3">
          <PlayerProfile pId={101} />
        </div>
        <div className="col-span-1">
          <InfoGrades
            pId={101}
            gradeName="avg"
            gameDate={new Date("2024-01-02")}
          />
        </div>
        <div className="col-span-1">
          <InfoGrades
            pId={101}
            gradeName="hr"
            gameDate={new Date("2024-01-02")}
          />
        </div>
        <div className="col-span-1 mr-3">
          <InfoGrades
            pId={101}
            gradeName="rbi"
            gameDate={new Date("2024-01-02")}
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <div className="ml-3">
          <InfoGrades
            pId={101}
            gradeName="ops"
            gameDate={new Date("2024-01-02")}
          />
        </div>
        <div>
          <InfoGrades
            pId={101}
            gradeName="ops"
            gameDate={new Date("2024-01-02")}
          />
        </div>
        <div>
          <InfoGrades
            pId={101}
            gradeName="ops"
            gameDate={new Date("2024-01-02")}
          />
        </div>
        <div>
          <InfoGrades
            pId={101}
            gradeName="ops"
            gameDate={new Date("2024-01-02")}
          />
        </div>
        <div>
          <InfoGrades
            pId={101}
            gradeName="ops"
            gameDate={new Date("2024-01-02")}
          />
        </div>
        <div className="mr-3">
          <InfoGrades
            pId={101}
            gradeName="ops"
            gameDate={new Date("2024-01-02")}
          />
        </div>
      </div>
    </>
  );
}
