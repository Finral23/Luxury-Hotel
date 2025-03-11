import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-neutral-800 text-slate-200 font-gotham">
      <div className="bg-[url(/hero.png)] bg-cover">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
