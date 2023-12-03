const ProductsCard = (): JSX.Element => {
  return (
    <article className="box-products">
      <div className="box-products__header">
        <p>In Need</p>
      </div>
      <div className="box-products__content">
        <div className="content-container">
          <div className="img">
            <img src="/assets/products-icon1.png" alt="" />
          </div>
          <div className="text">
            <h5>Sales</h5>
            <p>Unique and powerful suite sale run your entire business</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductsCard;
