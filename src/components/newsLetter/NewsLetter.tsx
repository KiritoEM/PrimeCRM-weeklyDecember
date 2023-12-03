import Flip from "react-reveal/Flip";

const NewsLetter = () : JSX.Element => {
  return (
    <section id="new-letter">
      <div className="bg">
        <Flip bottom>
        <div className="section-header">
          <div className="title">
            <h3>Sell | Serve | Automate</h3>
            <p>
              Boost enrolment and manage student lifecycle with our 360° CRM
            </p>
          </div>
          <div className="email">
            <p>*Your Business Email Address</p>
            <div className="form">
              <div className="input">
                <input type="text" placeholder="Email" />
              </div>
              <div className="button-send">
                <button className="btn">Try Now</button>
              </div>
            </div>
          </div>
        </div>
        </Flip>

        <Flip bottom>
        <div className="section-img">
            <img src="/assets/img-newsletter.png" alt="" />
        </div>
        </Flip>
      </div>
    </section>
  );
};

export default NewsLetter;
