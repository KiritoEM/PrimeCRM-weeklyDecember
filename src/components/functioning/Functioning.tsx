import dataHelper from "../../helpers/dataHelper";
import Fade from "react-reveal/Fade";

const Functioning = (): JSX.Element => {
  const { functioningData } = dataHelper();
  return (
    <section id="functioning">
      <div className="row gy-5 gy-lg-2">  
        <Fade left cascade>
          <div className="col-lg-5">
            <div className="section-header">
              <div className="title">
                <h3>How It Works</h3>
                <p>
                  Unique and powerful suite of software to run your business,
                  brought to you by vision to you work.
                </p>
              </div>

              <div className="points">
                {functioningData.headerPoints.map((item, index) => (
                  <div className="item" key={index}>
                    <div className="img">
                      <img src={item.img} alt="" className="mx-3" />
                    </div>
                    <div className="text">
                      <div className="subtitle">
                        <h5>{item.title}</h5>
                      </div>
                      <div className="text">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
        <Fade right cascade>
          <div className="col-lg-7">
            <div className="section-appmobile">
              <div className="text">
                <h3>
                  The Perfect CRM Software: Boost Your Field Sales Team’s
                  Efficiency
                </h3>
                <h5>
                  Depending on the Sales Approaches Standardize a Marketing
                  Process
                </h5>
                <p>
                  Unique and powerful suite of software to run your entire
                  business, brought to you by a company.
                </p>
                <div className="icons">
                  {functioningData.mobileIcons.map((item, index) => (
                    <img src={item.icons} alt="" key={index} />
                  ))}
                </div>
              </div>
              <div className="img">
                <img src="/assets/app-mobile.png" alt="" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Functioning;
