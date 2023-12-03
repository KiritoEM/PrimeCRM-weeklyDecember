const Pricing = (): JSX.Element => {
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
          <div className="row gx-5">
            <div className="col-6">
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
                      Includes <b>1,000</b> marketing contacts. Additional marketing
                      contacts are sold in increments of <b>1,000</b> from
                    </p>
                  </div>
                  <div className="line"></div>
                  <div className="points mt-4">
                      <div className="item">
                         <p><img src="/assets/icon.png" alt="" /><span className="mx-3">Outbound email and in-product</span></p>
                      </div>
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
