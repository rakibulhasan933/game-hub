import GameHub from "@/components/GameHub";
import Header from "@/components/Header";
import YourGames from "@/components/YourGames";


export default function Home() {
  return (
    <main>
      <div className="mx-20">
        <Header />
        <GameHub />
        <YourGames />
      </div>
    </main>
  )
}
