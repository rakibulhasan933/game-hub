import Header from "@/components/Header";


export default function Home() {
  return (
    <main className="my-16">
      <Header />
      <div className="my-22">
        <div className="px-8 ">
          <h2 className="flex justify-start font-sans text-2xl font-normal text-yellow-500 underline my-7 ">About Gamer Hub</h2>
          <p className="flex content-start justify-start my-10 text-white"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae facere maxime impedit, temporibus, sed facilis, cum hic quasi ullam iste molestias amet reprehenderit. Delectus, ullam numquam similique id blanditiis cum laudantium expedita repudiandae quos nemo explicabo eveniet? Minus, quae id cum quo est ipsa odio aliquid sint et suscipit mollitia. Vero, numquam, esse quaerat dolores, tempore hic itaque a accusantium voluptas aliquam cum voluptatibus veniam repellendus corporis necessitatibus! Molestias quaerat labore obcaecati, explicabo iusto in hic. Itaque, placeat sed? Saepe, deleniti blanditiis a fugiat nisi natus nostrum eligendi nam sequi incidunt molestiae esse amet voluptatum nulla odio aspernatur aliquid! </p>
        </div>
        <div className="flex justify-around px-4">
          <button className="px-5 py-3 my-12 font-semibold text-black bg-white rounded-md border-lime-600 hover:bg-lime-500 hover:text-white ">Get Started</button>
          <button className="px-5 py-3 my-12 font-semibold text-black bg-white rounded-md hover:bg-lime-500 hover:text-white ">Get Started</button>
          <button className="px-5 py-3 my-12 font-semibold text-black bg-white rounded-md hover:bg-lime-500 hover:text-white ">Get Started</button>
        </div>
      </div>
    </main>
  )
}
