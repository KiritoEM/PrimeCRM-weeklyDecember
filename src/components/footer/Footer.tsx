/* eslint-disable jsx-a11y/anchor-is-valid */
import dataHelper from "../../helpers/dataHelper";

const Footer = (): JSX.Element => {
  const { footerData } = dataHelper();
  return (
    <section id="footer">
      <div className="header">
        <div className="logo">
          <img src="/assets/logo-white.png" alt="" />
        </div>
        <div className="social-icons">
          {footerData.socialIcons.map((item, index) => (
            <div className="icon" key={index}>
              <img src={item.icon} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="navigation">
        <div className="row gx-0" id="navigation-container">
          <div className="col-3">
            <div className="links">
              <div className="title">
                <h5>Usefull Link</h5>
              </div>
              <div className="link-container">
                {footerData.link.map((item, index) => (
                  <div className="links-item" key={index}>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="services">
              <div className="title">
                <h5>Service</h5>
              </div>
              <div className="services-container">
                {footerData.services.map((item, index) => (
                  <div className="services-item" key={index}>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="contact">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <div className="contact-container">
                <div className="item">
                  <p>1700 W Blancke St, kiyev port south USA, American</p>
                </div>

                <div className="item mt-4">
                  <p>
                    +3255 456 789
                    <br /> mail@primarily.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="blog">
              <div className="title">
                <h5>Our Latest News</h5>
              </div>
              <div className="blog-container">
                <div className="button">
                  <button className="btn">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
