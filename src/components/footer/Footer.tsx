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
    </section>
  );
};

export default Footer;
