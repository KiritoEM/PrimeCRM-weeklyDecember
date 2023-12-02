import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import CoreFeatures from "../components/coreFeatures/CoreFeatures";
import Choice from "../components/Choice/Choice";
import Clients from "../components/clients/Clients";
import NewsLetter from "../components/newsLetter/NewsLetter";

const Home = (): JSX.Element => {
  return (
    <section id="home-page">
      <Hero />
      <Features />
      <CoreFeatures />
      <Choice />
      <Clients />
      <NewsLetter />
    </section>
  );
};

export default Home;
