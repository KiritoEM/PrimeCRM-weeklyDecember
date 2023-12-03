import PricingPoints from "../childrenComponents/PricingPoints";
import dataHelper from "../../helpers/dataHelper";
import { Fragment } from "react";

const Pricing = (): JSX.Element => {
  const { pricingData } = dataHelper();
  return (
    <section id="pricing">
      <div className="section-header">
        <h3>Deliver End-To-End Retail Billing & Solutions</h3>
        <p>
          Unique and powerful suite of software to run your entire business,
          brought to you by a company with the long term vision to transform the
          way you work.
        </p>
      </div>
      <div className="section-content">
        <div className="bg">
          <img src="/assets/pricing-bg.png" alt="" />
        </div>
        <div className="pricing-container">
          <div className="row gx-5 gy-5 gy-md-2">
            <div className="col-md-6">
              <div className="box-pricing">
                <div className="title">
                  <h5>
                    <img src="/assets/pricing1.png" alt="" /> Starter
                  </h5>
                </div>
                <div className="box">
                  <div className="box__header">
                    <h2>$45/mo</h2>
                    <p>
                      Includes <b>1,000</b> marketing contacts. Additional
                      marketing contacts are sold in increments of <b>1,000</b>{" "}
                      from
                    </p>
                  </div>
                  <div className="line"></div>
                  <Fragment>
                    {pricingData.starter.map((item, index) => (
                     <PricingPoints key={index} {...item} />
                    ))}
                  </Fragment>
                  <div className="button">
                    <button className="btn" id="btn-1">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-pricing">
                <div className="title">
                  <h5>
                    <img src="/assets/pricing2.png" alt="" /> Professional
                  </h5>
                </div>
                <div className="box">
                  <div className="box__header">
                    <h2>$60/mo</h2>
                    <p>
                      Includes <b>2,000</b> marketing contacts. Additional
                      marketing contacts are sold in increments of <b>5,000</b>{" "}
                      from
                    </p>
                  </div>
                  <div className="line"></div>
                  <Fragment>
                    {pricingData.pro.map((item, index) => (
                      <PricingPoints key={index} {...item} />
                    ))}
                  </Fragment>
                  <div className="button">
                    <button className="btn" id="btn-2">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
