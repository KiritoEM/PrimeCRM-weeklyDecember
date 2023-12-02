import React from "react";

interface Iprops {
  bg: string;
  img: string;
  title: string;
  text: string;
}

const FeatureCard: React.FC<Iprops> = ({
  bg,
  img,
  title,
  text,
}): JSX.Element => {
  return (
    <article className="box-feature" style={{backgroundColor: `${bg}`}}>
      <div className="box-feature__img">
         <img src={img} alt="" />
      </div>
      <div className="box-feature__content">
          <h5>{title}</h5>
          <p>{text}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
