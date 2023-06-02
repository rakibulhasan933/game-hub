

export default function Home() {
  return (
    <main>
      <h1>Your Server Running On Port:- {process.env.HOST}</h1>;
    </main>
  )
}
