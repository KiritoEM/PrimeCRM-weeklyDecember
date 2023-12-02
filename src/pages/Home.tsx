import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";

const Home = (): JSX.Element => {
  return (
    <section id="home-page">
      <Hero />
      <Features />
    </section>
  );
};

export default Home;
