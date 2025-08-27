import { useNavigate } from "react-router";
import LiveClock from "./components/LiveClock";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-mono py-8 px-16">
      <header className="mb-8">
        <h1 className="text-4xl" onClick={() => navigate("/")}>Name</h1>
      </header>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
        <section>
          <h2 className="flex items-center gap-2 mb-4 text-lg">
            Contact
          </h2>
          <p className="text-sm text-gray-600">Coming soon…</p>
        </section>

        <section>
          <h2 className="flex items-center gap-2 mb-4 text-lg">
            Projects
          </h2>
          <p className="text-sm text-gray-600">Coming soon…</p>
        </section>

        <section>
          <h2 className="flex items-center gap-2 mb-4 text-lg">
            Blog
          </h2>
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