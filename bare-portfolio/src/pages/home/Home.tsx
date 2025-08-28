import { useNavigate } from "react-router";
import { PhoneIncoming, Hammer, Brain } from "lucide-react";

import { LiveClock, Contact } from "./components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-mono py-8 px-16">
      <header className="mb-8">
        <h1 className="text-4xl" onClick={() => navigate("/")}>Name</h1>
      </header>

      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28">
        <section className="flex flex-col gap-4">
          <h2 className="flex items-center justify-between gap-2 text-lg">
            <PhoneIncoming className="size-4" />
            Contact
          </h2>
          <div className="bg-gray-200 h-[0.5px]"/>
          <Contact />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="flex items-center justify-between gap-2 text-lg">
          <Hammer  className="size-4" />
            Projects
          </h2>
          <div className="bg-gray-200 h-[0.5px]"/>
          <p className="text-sm text-gray-600">Coming soon…</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="flex items-center justify-between gap-2 text-lg">
            <Brain className="size-4" />
            Blog
          </h2>
          <div className="bg-gray-200 h-[0.5px]"/>
          <p className="text-sm text-gray-600">Coming soon…</p>
        </section>
      </main>

      <footer className="text-xs text-right">
        <LiveClock />
        <p>City, Country</p>
      </footer>
    </div>
  );
}

export default Home;