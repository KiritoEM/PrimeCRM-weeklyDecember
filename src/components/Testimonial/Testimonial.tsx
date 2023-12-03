import dataHelper from "../../helpers/dataHelper";
import Flip from "react-reveal/Flip";

const Testimonial = (): JSX.Element => {
  const { statisticsData } = dataHelper();
  return (
    <section id="testimonial">
      <div id="testimonial__container">
        <Flip bottom cascade>
          <div className="pattern">
            <img src="/assets/Pattern.png" alt="" />
          </div>
          <div className="testimonial-card">
            <div className="btn-left">
              <img src="/assets/Left.png" alt="" />
            </div>
            <div className="content">
              <div className="profile">
                <img src="/assets/profile.png" alt="" />
              </div>
              <div className="name">
                <h3>Adam Chen</h3>
              </div>
              <div className="job">
                <p>Analyst</p>
              </div>
              <div className="rating">
                <img src="/assets/Rating.png" alt="" />
              </div>
              <div className="content">
                <p>
                  “ PrimeCRM Is The Most Intuitive And Modern Live Chat We
                  Found. Live Chat Obviously Made <b>Our Users Happier</b> And
                  Our Service Department More Efficient
                </p>
              </div>
            </div>
            <div className="btn-right">
              <img src="/assets/Right.png" alt="" />
            </div>
          </div>
          <div className="line"></div>
          <div className="statistics">
            <div className="row gy-4 gy-2">
              {statisticsData.map((item, index) => (
                <div className="col-6 col-md-3" key={index} id="container">
                  <div className="stat">
                    <h3
                      dangerouslySetInnerHTML={{ __html: item.stat }}
                      id={item.id}
                    />
                  </div>
                  <div className="label">
                    <p>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Flip>
      </div>
    </section>
  );
};

export default Testimonial;
