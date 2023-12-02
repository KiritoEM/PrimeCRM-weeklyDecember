import ColorCard from "../childrenComponents/ColorCard";

const Color = (): JSX.Element => {
  return (
    <section id="color">
      <div className="section-header">
        <h2>Color</h2>
      </div>
      <div className="section-content">
        <div className="section-primary">
          <div className="row gx-0">
            <ColorCard />
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
