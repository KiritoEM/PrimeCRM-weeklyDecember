import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import CoreFeatures from "../components/coreFeatures/CoreFeatures";
import Choice from "../components/Choice/Choice";
import Clients from "../components/clients/Clients";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Products from "../components/products/Products";
import Functioning from "../components/functioning/Functioning";

const Home = (): JSX.Element => {
  return (
    <section id="home-page">
      <Hero />
      <Features />
      <CoreFeatures />
      <Choice />
      <Clients />
      <NewsLetter />
      <Products />
      <Functioning />
    </section>
  );
};

export default Home;
