import React from "react";

interface Iprops {
  text: string;
  id: string;
}

const PricingPoints: React.FC<Iprops> = ({ id, text }): JSX.Element => {
  return (
    <div className="points mt-4">
      <div className="item">
        <p>
          <img src="/assets/icon.png" alt="" />
          <span dangerouslySetInnerHTML={{ __html: text }} className="mx-3" />
        </p>
      </div>
    </div>
  );
};

export default PricingPoints;
