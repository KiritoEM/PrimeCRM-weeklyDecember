import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import CoreFeatures from "../components/coreFeatures/CoreFeatures";
import Choice from "../components/Choice/Choice";

const Home = (): JSX.Element => {
  return (
    <section id="home-page">
      <Hero />
      <Features />
      <CoreFeatures />
      <Choice />
    </section>
  );
};

export default Home;
