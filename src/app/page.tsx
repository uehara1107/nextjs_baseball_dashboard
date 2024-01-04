import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/batter">打者成績</Link>
      </div>
      <div>
        <Link href="/pitcher">投手成績</Link>
      </div>
    </>
  );
}
