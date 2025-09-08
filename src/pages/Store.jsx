export default function Store() {
  const offers = ["Game A", "Game B", "Game C"];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Store</h2>
      <div className="grid grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div key={offer} className="bg-gray-700 p-4 rounded">
            {offer}
          </div>
        ))}
      </div>
    </div>
  );
}