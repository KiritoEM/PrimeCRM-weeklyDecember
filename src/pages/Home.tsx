import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import CoreFeatures from "../components/coreFeatures/CoreFeatures";

const Home = (): JSX.Element => {
  return (
    <section id="home-page">
      <Hero />
      <Features />
      <CoreFeatures />
    </section>
  );
};

export default Home;
