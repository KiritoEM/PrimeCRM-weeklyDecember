interface Iprops {
  img: string;
  title: string;
  id ?: string;
}

const ProductsCard: React.FC<Iprops> = ({ img, title, id }): JSX.Element => {
  return (
    <div className="box-products__content">
      <div className="item">
        <div className="img">
          <img src={`${img}`} alt="" />
        </div>
        <div className="text" id={id}>
          <h5>{title}</h5>
          <p>Unique and powerful suite sale run your entire business</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
