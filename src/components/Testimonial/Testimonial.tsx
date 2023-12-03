const Testimonial = (): JSX.Element => {
  return (
    <section id="testimonial">
      <div id="testimonial__container">
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
                “ PrimeCRM Is The Most Intuitive And Modern Live Chat We Found.
                Live Chat Obviously Made <b>Our Users Happier</b> And Our Service
                Department More Efficient
              </p>
            </div>
          </div>
          <div className="btn-right">
            <img src="/assets/Right.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
