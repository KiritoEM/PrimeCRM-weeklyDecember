import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import CoreFeatures from "../components/coreFeatures/CoreFeatures";
import Choice from "../components/Choice/Choice";
import Clients from "../components/clients/Clients";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Products from "../components/products/Products";

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
    </section>
  );
};

export default Home;
