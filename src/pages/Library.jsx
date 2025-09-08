export default function Library() {
  const games = ["Game 1", "Game 2", "Game 3"];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Your Library</h2>
      <div className="grid grid-cols-3 gap-4">
        {games.map((game) => (
          <div key={game} className="bg-gray-700 p-4 rounded">
            {game}
          </div>
        ))}
      </div>
    </div>
  );
}