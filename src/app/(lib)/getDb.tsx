export async function getDb() {
  const res = await fetch(`http://192.168.11.6:8080/test`);
  // const data = res.json();
  console.log(res);
  return res;
}
