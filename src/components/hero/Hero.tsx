import { Fragment } from "react";

interface Ipolygon {
  id: string;
  icon: string;
}

const Hero = (): JSX.Element => {
  const polygonIcon: Ipolygon[] = [
    {
      icon: "/assets/p1.png",
      id: "p1",
    },
    {
      icon: "/assets/p2.png",
      id: "p2",
    },
    {
      icon: "/assets/p3.png",
      id: "p3",
    },
    {
      icon: "/assets/p6.png",
      id: "p6",
    },

    {
      icon: "/assets/p7.png",
      id: "p7",
    },
  ];
  return (
    <Fragment>
      <section id="hero">
        <div className="row">
          <div className="col-4">
            <div className="section-header">
              <div className="title">
                <h1>The CRM Platform Your Whole Business Will Love</h1>
              </div>
              <div className="text">
                <p>
                  Provide excellent customer service. Answer more tickets
                  all-in-one Primarily software.
                </p>
              </div>
              <div className="buttons">
                <button className="btn" id="btn-1">
                  Get Started
                </button>
                <button className="btn" id="btn-2">
                  How it work
                </button>
              </div>

              <div className="line"></div>

              <div className="FiveStar">
                <div className="img-1">
                  <img src="/assets/five1.png" alt="" className="five-border" />
                </div>
                <div className="five-logo">
                  <img src="/assets/five3.png" alt="" />
                </div>
                <div className="five-star">
                  <h5>5 Star Awards</h5>
                  <p>For customer services</p>
                  <img src="/assets/Star.png" alt="" />
                </div>
                <div className="img-2">
                  <img src="/assets/five2.png" alt="" className="five-border" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-8">
            <div className="section-cover">
              <img src="/assets/Background.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="polygon">
        {polygonIcon.map((item, index) => (
          <img src={item.icon} alt="" key={index} id={item.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Hero;
