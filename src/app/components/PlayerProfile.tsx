export default function PlayerProfile() {
  return (
    <div className="border border-blue-400 rounded shadow-md">
      <div className="flex justify-center">
        <h1>基本情報</h1>
      </div>
      <div className="flex justify-center">
        <p>名前：testtest</p>
      </div>
      <div className="flex justify-center">
        <p>生年月日：○月○日(○○歳)</p>
      </div>
      <div className="flex justify-center">
        <p>身長：○○㎝/体重：○○㎏</p>
      </div>
      <div className="flex justify-center">
        <p>投打：◯投げ◯打ち</p>
      </div>
    </div>
  );
}
