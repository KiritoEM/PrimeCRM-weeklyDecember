const Color = (): JSX.Element => {
  return (
    <section id="color">
      <div className="section-header">
        <h2>Color</h2>
      </div>
      <div className="section-content">
        <div className="section-primary">
          <div className="row">
            <div className="col-3">
              <div className="box-color">
                <div className="box-color__bg"></div>
                <div className="box-color__content">
                  <p className="box-label"></p>
                  <p className="box-palet"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-secondary">
          <div className="row"></div>
        </div>
      </div>
    </section>
  );
};

export default Color;
