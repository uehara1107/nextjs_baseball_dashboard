import { BatterGameData, PlayerData } from "../(domains)/playerType";

const getBatterData: (pId: number) => Promise<PlayerData[]> = async (pId) => {
  const url = `http://172.24.64.1:8080/test/batter/${pId}`;
  const res = await fetch(url, {
    next: { revalidate: 0 },
  });
  console.log(url);
  const data = await res.json();
  console.log(data);
  return data;
};

const getBatterGameData: (pId: number) => Promise<BatterGameData[]> = async (
  pId
) => {
  const res = await fetch(`http://172.24.64.1:8080/test/batter/grade/${pId}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export { getBatterGameData, getBatterData };
