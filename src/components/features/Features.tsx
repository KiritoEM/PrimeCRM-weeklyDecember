import dataHelper from "../../helpers/dataHelper";
import FeatureCard from "../childrenComponents/FeatureCard";
import Fade from "react-reveal/Fade";

const Features = (): JSX.Element => {
  const { featureData } = dataHelper();
  return (
    <section id="features">
      <Fade bottom>
        <div className="section-header">
          <h3>Explore Premium Features</h3>
          <p>
            Unique and powerful suite of software to run your entire business,
            brought to you by a company with the long term vision to transform
            the way you work.
          </p>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="section-content mt-5">
          <div className="row gx-5 gy-5  gy-lg-2">
            {featureData.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <FeatureCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Features;
