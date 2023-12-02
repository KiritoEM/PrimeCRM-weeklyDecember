import ColorCard from "../childrenComponents/ColorCard";
import dataHelper from "../../helpers/dataHelper";

const Color = (): JSX.Element => {
    const { colorData } = dataHelper();
  return (
    <section id="color">
      <div className="section-header">
        <h2>Color</h2>
      </div>
      <div className="section-content">
        <div className="section-primary">
          <div className="row gx-5">
            {colorData.primary.map((item, index)=>(
                <ColorCard  key={index} {...item}/>
            ))}
          </div>
        </div>
        <div className="section-secondary">
          <div className="row gx-5">
          {colorData.secondary.map((item, index)=>(
                <ColorCard  key={index} {...item}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Color;
