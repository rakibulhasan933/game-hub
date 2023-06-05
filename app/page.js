import GameHub from "@/components/GameHub";
import Header from "@/components/Header";
import SelectedBanner from "@/components/SelectedBanner";
import YourGames from "@/components/YourGames";


export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <GameHub />
        <SelectedBanner />
        <YourGames />
      </div>
    </main>
  )
}
