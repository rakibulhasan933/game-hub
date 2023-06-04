import GameHub from "@/components/GameHub";
import Header from "@/components/Header";
import YourGames from "@/components/YourGames";


export default function Home() {
  return (
    <main className="my-16">
      <Header />
      <GameHub />
      <YourGames />
    </main>
  )
}
