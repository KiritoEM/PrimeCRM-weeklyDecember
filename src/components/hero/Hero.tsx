import { Fragment } from "react";
import Fade from "react-reveal/Fade";

interface Ipolygon {
  id: string;
  icon: string;
}

interface IheroImg {
  img_src: string;
  id?: string;
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
          <Fade left>
            <div className="col-lg-4">
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
                    <img
                      src="/assets/five1.png"
                      alt=""
                      className="five-border"
                    />
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
                    <img
                      src="/assets/five2.png"
                      alt=""
                      className="five-border"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="col-md-6 col-lg-8 d-none d-lg-flex">
              <div className="section-cover">
                {/* <div className="img-container">
                  <div className="section-1">
                    <img src="/assets/hero1.png" alt="" />
                    <img src="/assets/hero2.png" alt="" id="hero2" />
                  </div>
                  <div className="section-2">
                    <img src="/assets/hero3.png" alt="" />
                    <img src="/assets/hero4.png" alt="" id="hero4" />
                  </div>

                  <div className="section-3">
                    <img src="/assets/hero5.png" alt="" />
                  </div>
                </div> */}
              </div>
            </div>
          </Fade>
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
