import dataHelper from "../../helpers/dataHelper";

const Functioning = (): JSX.Element => {
  const { functioningData } = dataHelper();
  return (
    <section id="functioning">
      <div className="row">
        <div className="col-5">
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
        <div className="col-7"></div>
      </div>
    </section>
  );
};

export default Functioning;
