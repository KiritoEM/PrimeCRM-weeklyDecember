import dataHelper from "../../helpers/dataHelper";

const Choice = (): JSX.Element => {
  const { choiceData } = dataHelper();
  return (
    <section id="choice">
      <div className="row gx-1 gx-md-5  gy-5 gy-md-2">
        <div className="col-md-6">
          <div className="section-content">
            <div className="header">
              <h3>Ways a project management tool can help your team</h3>
              <p>
                Unique and powerful suite of software to run your entire
                business, brought to you by a company with the long term vision
                to transform the way you work.
              </p>
            </div>
            <div className="points">
              <div className="row gx-3">
                {choiceData.map((item, index) => (
                  <div className="col-6" key={index}>
                    <div className="box-points">
                      <div className="box-points__img" id={item.id}>
                        <img src={item.img} alt="" />
                      </div>
                      <div className="box-points__content">
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="button">
                 <button className="btn">
                     Get Started
                 </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="section-cover">
            <img src="/assets/img-choice.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choice;
