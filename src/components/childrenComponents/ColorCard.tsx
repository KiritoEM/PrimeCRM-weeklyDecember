import React from "react";

interface Iprops {
  bg: string;
  label: string;
  palet: string;
}

const ColorCard: React.FC<Iprops> = ({ bg, label, palet }): JSX.Element => {
  return (
    <div className="col-3">
      <div className="box-color">
        <div
          className="box-color__bg"
          style={{ backgroundColor: `${bg}` }}
        ></div>
        <div className="box-color__content">
          <p className="label">{label}</p>
          <p className="palet">{palet}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
