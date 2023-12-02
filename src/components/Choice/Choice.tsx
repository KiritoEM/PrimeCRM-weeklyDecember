const Choice = (): JSX.Element => {
  return (
    <section id="choice">
      <div className="row gx-5">
        <div className="col-6">
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
               <div className="row">
                 <div className="col-6"></div>
                 <div className="col-6"></div>
               </div>
             </div>
          </div>
        </div>
        <div className="col-6">
          <div className="section-cover">
            <img src="/assets/img-choice.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choice;
