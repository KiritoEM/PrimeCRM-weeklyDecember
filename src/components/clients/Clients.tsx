import dataHelper from "../../helpers/dataHelper";
import Flip from "react-reveal/Flip";

const Clients = (): JSX.Element => {
  const { clienData } = dataHelper();
  return (
    <section id="clients">
      <Flip bottom>
        <div className="section-header">
          <h3>Trusted by more than 75 million users globally</h3>
          <p>
            Unique and powerful suite of software to run your entire business,
            brought to you transform the way you work.
          </p>
        </div>
      </Flip>
      <Flip bottom>
        <div className="section-content">
          <div className="line-1">
            {clienData.line1.map((item, index) => (
              <div className={`logo ${item.class}`} key={index}>
                <img src={item.img_src} alt="" />
              </div>
            ))}
          </div>
          <div className="line-2">
            {clienData.line2.map((item, index) => (
              <div className={`logo ${item.class}`} key={index}>
                <img src={item.img_src} alt="" />
              </div>
            ))}
          </div>
          <div className="line-3">
            {clienData.line3.map((item, index) => (
              <div className={`logo ${item.class}`} key={index}>
                <img src={item.img_src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </Flip>
    </section>
  );
};

export default Clients;
